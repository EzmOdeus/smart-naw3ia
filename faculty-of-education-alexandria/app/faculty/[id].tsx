import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Header } from '@/components/ui/Header';
import { Text } from '@/components/ui/Text';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { facultyMembers } from '@/data/faculty';
import { useTranslation } from '@/hooks/useTranslation';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function FacultyDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t } = useTranslation();
  
  const member = facultyMembers.find((faculty) => faculty.id === id);
  
  if (!member) {
    return (
      <SafeAreaView style={styles.container}>
        <Header title={t('faculty.title')} showBackButton />
        <View style={styles.errorContainer}>
          <Text>Faculty member not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${member.email}`);
  };

  const handlePhonePress = () => {
    Linking.openURL(`tel:${member.phone}`);
  };

  return (
    <SafeAreaView style={styles.container} edges={['right', 'left', 'bottom']}>
      <Stack.Screen options={{ title: member.name }} />

      <Header title={member.name} showBackButton />

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileHeader}>
          
          <View style={styles.profileInfo}>
            <Text variant="h4" color="primary.500">
              {member.name}
            </Text>
            <Text variant="subtitle" color="gray.600">
              {member.title}
            </Text>
            <Text
              variant="body"
              color="secondary.600"
              style={styles.department}
            >
              {member.department}
            </Text>
          </View>
        </View>

        <View style={styles.contactContainer}>
          <Button
            variant="outline"
            leftIcon={
              <AntDesign name="mail" size={18} color={Colors.primary[500]} />
            }
            style={styles.contactButton}
            onPress={handleEmailPress}
          >
            {t('faculty.email')}
          </Button>
          <Button
            variant="outline"
            leftIcon={
              <AntDesign name="phone" size={18} color={Colors.primary[500]} />
            }
            style={styles.contactButton}
            onPress={handlePhonePress}
          >
            {t('faculty.phone')}
          </Button>
        </View>

        <Card style={styles.infoCard}>
          <Text variant="subtitle" color="primary.500" style={styles.infoTitle}>
            {t('faculty.specialization')}
          </Text>
          <Text variant="body" color="gray.800">
            {member.specialization}
          </Text>

          <Text
            variant="subtitle"
            color="primary.500"
            style={[styles.infoTitle, styles.topSpacing]}
          >
            {t('faculty.office')}
          </Text>
          <Text variant="body" color="gray.800">
            {member.office}
          </Text>

          <Text
            variant="subtitle"
            color="primary.500"
            style={[styles.infoTitle, styles.topSpacing]}
          >
            {t('faculty.officeHours')}
          </Text>
          <Text variant="body" color="gray.800">
            {member.officeHours}
          </Text>
        </Card>

        <Text variant="h4" color="primary.500" style={styles.sectionTitle}>
          {t('common.about')}
        </Text>
        <Card style={styles.bioCard}>
          <Text variant="body" color="gray.800" style={styles.bioText}>
            {member.bio}
          </Text>
        </Card>

        <Text variant="h4" color="primary.500" style={styles.sectionTitle}>
          {t('faculty.courses')}
        </Text>
        <Card style={styles.coursesCard}>
          {member.courses.map((course, index) => (
            <View key={index} style={styles.courseItem}>
        
              <Feather
                name="book-open"
                size={18}
                color={Colors.secondary[500]}
              />
              <Text variant="body" color="gray.800" style={styles.courseText}>
                {course}
              </Text>
            </View>
          ))}
        </Card>

        <Text variant="h4" color="primary.500" style={styles.sectionTitle}>
          {t('faculty.publications')}
        </Text>
        <Card style={styles.publicationsCard}>
          {member.publications.map((publication, index) => (
            <View key={index} style={styles.publicationItem}>
              <AntDesign
                name="filetext1"
                size={18}
                color={Colors.primary[500]}
              />
              <View style={styles.publicationContent}>
                <Text variant="subtitle" color="gray.800">
                  {publication.title}
                </Text>
                <Text
                  variant="caption"
                  color="gray.600"
                  style={styles.publicationMeta}
                >
                  {publication.journal}, {publication.year}
                </Text>
              </View>
            </View>
          ))}
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: Layout.spacing.m,
    paddingBottom: Layout.spacing.xxl,
  },
  profileHeader: {
    flexDirection: 'row',
    marginBottom: Layout.spacing.l,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: Layout.spacing.l,
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  department: {
    marginTop: Layout.spacing.s,
  },
  contactContainer: {
    flexDirection: 'row',
    marginBottom: Layout.spacing.l,
  },
  contactButton: {
    flex: 1,
    marginHorizontal: Layout.spacing.xs,
  },
  infoCard: {
    marginBottom: Layout.spacing.l,
  },
  infoTitle: {
    marginBottom: Layout.spacing.xs,
  },
  topSpacing: {
    marginTop: Layout.spacing.m,
  },
  sectionTitle: {
    marginBottom: Layout.spacing.m,
  },
  bioCard: {
    marginBottom: Layout.spacing.l,
  },
  bioText: {
    lineHeight: 24,
  },
  coursesCard: {
    marginBottom: Layout.spacing.l,
  },
  courseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.m,
  },
  courseText: {
    marginLeft: Layout.spacing.m,
  },
  publicationsCard: {
    marginBottom: Layout.spacing.l,
  },
  publicationItem: {
    flexDirection: 'row',
    marginBottom: Layout.spacing.m,
  },
  publicationContent: {
    flex: 1,
    marginLeft: Layout.spacing.m,
  },
  publicationMeta: {
    marginTop: Layout.spacing.xs,
  },
});