import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Header } from '@/components/ui/Header';
import { Text } from '@/components/ui/Text';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { departments } from '@/data/departments';
import { useTranslation } from '@/hooks/useTranslation';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageSourcePropType } from 'react-native/Libraries/Image/Image';

export default function DepartmentDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<string>('overview');
  const router = useRouter();
  
  const department = departments.find((dept) => dept.id === id);
  
  if (!department) {
    return (
      <SafeAreaView style={styles.container}>
        <Header title={t('departments.title')} showBackButton />
        <View style={styles.errorContainer}>
          <Text>Department not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  const tabs = [
    { id: 'overview', title: 'Overview' },
    { id: 'courses', title: t('departments.courses') },
    { id: 'faculty', title: t('departments.faculty') },
    { id: 'research', title: t('departments.research') },
    { id: 'activities', title: t('departments.activities') },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <View>
            <Text variant="body" color="gray.800" style={styles.sectionText}>
              {department.description}
            </Text>

            <Text variant="h4" color="primary.500" style={styles.sectionTitle}>
              {t('departments.head')}
            </Text>

            <Card style={styles.headCard}>
              <View style={styles.headProfile}>
                <Image
                  source={
                    department.head.image
                      ? (department.head.image as ImageSourcePropType)
                      : require('@/assets/images/images.jpg')
                  }
                  style={styles.headImage}
                />
                <View style={styles.headInfo}>
                  <Text variant="subtitle" color="primary.500">
                    {department.head.name}
                  </Text>
                  <Text variant="caption" color="gray.600">
                    {department.head.title}
                  </Text>
                  <Text variant="caption" color="gray.600">
                    {department.head.specialization}
                  </Text>
                  <TouchableOpacity>
                    <Text
                      variant="caption"
                      color="secondary.500"
                      style={styles.email}
                    >
                      {department.head.email}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text variant="body" color="gray.700" style={styles.headBio}>
                {department.head.bio}
              </Text>
            </Card>
          </View>
        );
        
      case 'courses':
        return (
          <View>
            {department.courses.map((course) => (
              <Card key={course.id} style={styles.courseCard}>
                <View style={styles.courseHeader}>
                  <Text variant="subtitle" color="primary.500">{course.name}</Text>
                  <Text variant="caption" color="secondary.500">{course.code}</Text>
                </View>
                <Text variant="body" color="gray.700" style={styles.courseDescription}>
                  {course.description}
                </Text>
                <View style={styles.courseFooter}>
                  <Text variant="caption" color="gray.600">
                    Credits: {course.credits}
                  </Text>
                  <Button
                    variant="outline"
                    size="small"
                    style={styles.courseButton}
                  >
                    Details
                  </Button>
                </View>
              </Card>
            ))}
          </View>
        );
        
      case 'faculty':
        return (
          <View>
            {department.faculty.map((member) => (
                    <TouchableOpacity key={member.id} onPress={() => router.push(`/faculty/${member.id}`)}>
              <Card key={member.id} style={styles.facultyCard}>
                <View style={styles.facultyProfile}>
                  {/* <Image source={ member.image } style={styles.facultyImage} /> */}
                  <View style={styles.facultyInfo}>
                      <Text variant="subtitle" color="primary.500" style={{fontWeight: 'bold'}}>
                        {member.name}
                      </Text>
                    <Text variant="caption" color="gray.600">{member.title}</Text>
                    <Text variant="caption" color="gray.600">{member.specialization}</Text>
                    <TouchableOpacity>
                      <Text variant="caption" color="secondary.500" style={styles.email}>
                        {member.email}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <Text variant="body" color="gray.700" style={styles.facultyBio}>
                  {member.bio}
                </Text>
              </Card>
                    </TouchableOpacity>
            ))}
          </View>
        );
        
      case 'research':
        return (
          <View>
            {department.research.map((research) => (
              <Card key={research.id} style={styles.researchCard}>
                <Text variant="subtitle" color="primary.500">{research.title}</Text>
                <Text variant="caption" color="gray.500" style={styles.researchMeta}>
                  {research.authors.join(', ')} • {research.publishedDate} • {research.journal}
                </Text>
                <Text variant="body" color="gray.700" style={styles.researchAbstract}>
                  {research.abstract}
                </Text>
              </Card>
            ))}
          </View>
        );
        
      case 'activities':
        return (
          <View>
            {department.activities.map((activity) => (
              <Card key={activity.id} style={styles.activityCard}>
                <Image
                  source={typeof activity.image === 'string' && activity.image ? { uri: activity.image } : require('../../assets/images/download.jpg')}
                  style={styles.activityImage}
                />
                <View style={styles.activityContent}>
                  <Text variant="subtitle" color="primary.500">{activity.title}</Text>
                  <Text variant="caption" color="gray.500" style={styles.activityDate}>
                    {activity.date}
                  </Text>
                  <Text variant="body" color="gray.700" style={styles.activityDescription}>
                    {activity.description}
                  </Text>
                </View>
              </Card>
            ))}
          </View>
        );
        
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['right', 'left', 'bottom']}>
      <Stack.Screen options={{ title: department.name }} />
      
      <Header
        title={department.name}
        showBackButton
      />
      
      <Image
        source={typeof department.image === 'string' && department.image ? { uri: department.image } : require('../../assets/images/download.jpg')}
        style={styles.heroImage}
      />
      
      <View style={styles.tabsContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabs}
        >
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.id}
              style={[
                styles.tab,
                activeTab === tab.id && styles.activeTab,
              ]}
              onPress={() => setActiveTab(tab.id)}
            >
              <Text
                variant="subtitle"
                color={activeTab === tab.id ? 'primary.500' : 'gray.500'}
              >
                {tab.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {renderTabContent()}
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
  heroImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  tabsContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[200],
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: Layout.spacing.m,
  },
  tab: {
    paddingVertical: Layout.spacing.m,
    marginRight: Layout.spacing.l,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary[500],
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: Layout.spacing.m,
    paddingBottom: Layout.spacing.xxl,
  },
  sectionTitle: {
    marginTop: Layout.spacing.l,
    marginBottom: Layout.spacing.m,
  },
  sectionText: {
    lineHeight: 24,
  },
  headCard: {
    marginTop: Layout.spacing.s,
  },
  headProfile: {
    flexDirection: 'row',
    marginBottom: Layout.spacing.m,
  },
  headImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: Layout.spacing.m,
  },
  headInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  headBio: {
    lineHeight: 22,
  },
  email: {
    marginTop: Layout.spacing.xs,
  },
  courseCard: {
    marginBottom: Layout.spacing.m,
  },
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Layout.spacing.s,
  },
  courseDescription: {
    marginBottom: Layout.spacing.m,
  },
  courseFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  courseButton: {
    paddingHorizontal: Layout.spacing.m,
  },
  facultyCard: {
    marginBottom: Layout.spacing.m,
  },
  facultyProfile: {
    flexDirection: 'row',
    marginBottom: Layout.spacing.m,
  },
  facultyImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: Layout.spacing.m,
  },
  facultyInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  facultyBio: {
    lineHeight: 22,
  },
  researchCard: {
    marginBottom: Layout.spacing.m,
  },
  researchMeta: {
    marginVertical: Layout.spacing.s,
  },
  researchAbstract: {
    lineHeight: 22,
  },
  activityCard: {
    marginBottom: Layout.spacing.m,
    padding: 0,
    overflow: 'hidden',
  },
  activityImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  activityContent: {
    padding: Layout.spacing.m,
  },
  activityDate: {
    marginTop: Layout.spacing.xs,
    marginBottom: Layout.spacing.s,
  },
  activityDescription: {
    lineHeight: 22,
  },
});