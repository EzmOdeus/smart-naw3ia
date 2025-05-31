import React from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { Header } from '@/components/ui/Header';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';
import { useTranslation } from '@/hooks/useTranslation';
import { aboutInfo } from '@/data/about';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
export default function AboutScreen() {
  const { t } = useTranslation();
  
  const handleSocialMediaPress = (url: string) => {
    Linking.openURL(url);
  };
  
  const handleEmailPress = () => {
    Linking.openURL(`mailto:${aboutInfo.contact.email}`);
  };
  
  const handlePhonePress = () => {
    Linking.openURL(`tel:${aboutInfo.contact.phone}`);
  };
  
  const handleWebsitePress = () => {
    Linking.openURL(`https://${aboutInfo.contact.website}`);
  };
  
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'facebook':
        return <Entypo name="facebook" size={20} color={Colors.white} />;
      case 'twitter':
        return <Entypo name="twitter" size={20} color={Colors.white} />;
      case 'instagram':
        return <Entypo name="instagram" size={20} color={Colors.white} />;
      case 'youtube':
        return <Entypo name="youtube" size={20} color={Colors.white} />;
      default:
        return <Entypo name="globe" size={20} color={Colors.white} />;
    }
  };
  
  return (
    <SafeAreaView style={styles.container} edges={['right', 'left', 'bottom']}>
      <Header title={t('about.title')} showBackButton />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Text variant="h3" color="primary.500" style={styles.sectionTitle}>
            {t('about.history_title')}
          </Text>
          <Image
            source={{ uri: aboutInfo.history.image }}
            style={styles.historyImage}
          />
          <Text variant="body" color="gray.800" style={styles.historyText}>
            {t('about.history_content')}
          </Text>
        </View>

        <View style={styles.section}>
          <Text variant="h3" color="primary.500" style={styles.sectionTitle}>
            {t('about.mission_title')}
          </Text>
          <Card style={styles.missionCard}>
            <Text variant="body" color="gray.800">
              {t('about.mission_content')}
            </Text>
          </Card>
        </View>

        <View style={styles.section}>
          <Text variant="h3" color="primary.500" style={styles.sectionTitle}>
            {t('about.vision_title')}
          </Text>
          <Card style={styles.visionCard}>
            <Text variant="body" color="gray.800">
              {t('about.vision_content')}
            </Text>
          </Card>
        </View>

        <View style={styles.section}>
          <Text variant="h3" color="primary.500" style={styles.sectionTitle}>
            {aboutInfo.goals.title}
          </Text>
          {aboutInfo.goals.items.map((goal, idx) => (
            <Text
              key={idx}
              variant="body"
              color="gray.800"
              style={styles.historyText}
            >
              • {goal}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text variant="h3" color="primary.500" style={styles.sectionTitle}>
            {aboutInfo.values.title}
          </Text>
          {aboutInfo.values.items.map((value, index) => (
            <Card key={index} style={styles.valueCard}>
              <Text
                variant="subtitle"
                color="primary.500"
                style={styles.valueTitle}
              >
                {value.title}
              </Text>
              <Text variant="body" color="gray.800">
                {value.description}
              </Text>
            </Card>
          ))}
        </View>

        <View style={styles.section}>
          <Text variant="h3" color="primary.500" style={styles.sectionTitle}>
            {aboutInfo.leadership.title}
          </Text>
          <View style={styles.leadershipGrid}>
            {aboutInfo.leadership.members.map((leader, index) => (
              <Card key={index} style={styles.leaderCard}>
                <Image
                  source={{ uri: leader.image }}
                  style={styles.leaderImage}
                />
                <Text
                  variant="subtitle"
                  color="primary.500"
                  style={styles.leaderName}
                >
                  {leader.name}
                </Text>
                <Text variant="caption" color="gray.600">
                  {leader.title}
                </Text>
              </Card>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text variant="h3" color="primary.500" style={styles.sectionTitle}>
            {t('about.organizationalStructure_title')}
          </Text>
          <Image
            source={{ uri: aboutInfo.organizationalStructure.image }}
            style={styles.historyImage}
          />
          <Text variant="body" color="gray.800" style={styles.historyText}>
            {t('about.organizationalStructure_content')}
          </Text>
        </View>
        <View style={styles.section}>
          <Text variant="h3" color="primary.500" style={styles.sectionTitle}>
            {aboutInfo.contact.title}
          </Text>
          <Card style={styles.contactCard}>
            <View style={styles.contactItem}>
              <Entypo
                name="location-pin"
                size={20}
                color={Colors.primary[500]}
              />
              <Text variant="body" color="gray.800" style={styles.contactText}>
                {aboutInfo.contact.address}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.contactItem}
              onPress={handlePhonePress}
            >
              <AntDesign name="phone" size={20} color={Colors.primary[500]} />
              <Text
                variant="body"
                color="primary.500"
                style={styles.contactText}
              >
                {aboutInfo.contact.phone}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.contactItem}
              onPress={handleEmailPress}
            >
              <Entypo name="mail" size={20} color={Colors.primary[500]} />
              <Text
                variant="body"
                color="primary.500"
                style={styles.contactText}
              >
                {aboutInfo.contact.email}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.contactItem}
              onPress={handleWebsitePress}
            >
              <Entypo name="globe" size={20} color={Colors.primary[500]} />
              <Text
                variant="body"
                color="primary.500"
                style={styles.contactText}
              >
                {aboutInfo.contact.website}
              </Text>
            </TouchableOpacity>
            <View style={styles.contactItem}>
              <Text variant="body" color="gray.800" style={styles.contactText}>
                {aboutInfo.contact.fax}
              </Text>
            </View>
          </Card>
          <Text
            variant="subtitle"
            color="primary.500"
            style={styles.socialTitle}
          >
            {t('about.socialMedia')}
          </Text>
          <View style={styles.socialContainer}>
            {aboutInfo.contact.socialMedia.map((social, index) => (
              <TouchableOpacity
                key={index}
                style={styles.socialButton}
                onPress={() => handleSocialMediaPress(social.url)}
              >
                {getSocialIcon(social.platform)}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: Layout.spacing.m,
    paddingBottom: Layout.spacing.xxl,
  },
  section: {
    marginBottom: Layout.spacing.xl,
  },
  sectionTitle: {
    marginBottom: Layout.spacing.m,
  },
  historyImage: {
    width: '100%',
    height: 200,
    borderRadius: Layout.borderRadius.m,
    marginBottom: Layout.spacing.m,
  },
  historyText: {
    lineHeight: 24,
  },
  missionCard: {
    backgroundColor: Colors.primary[50],
  },
  visionCard: {
    backgroundColor: Colors.secondary[50],
  },
  valueCard: {
    marginBottom: Layout.spacing.m,
  },
  valueTitle: {
    marginBottom: Layout.spacing.s,
  },
  leadershipGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  leaderCard: {
    width: '48%',
    marginBottom: Layout.spacing.m,
    alignItems: 'center',
  },
  leaderImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: Layout.spacing.m,
  },
  leaderName: {
    textAlign: 'center',
    marginBottom: Layout.spacing.xs,
  },
  contactCard: {
    marginBottom: Layout.spacing.m,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: Layout.spacing.m,
  },
  contactText: {
    marginLeft: Layout.spacing.m,
    flex: 1,
  },
  socialTitle: {
    marginBottom: Layout.spacing.m,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary[500],
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: Layout.spacing.s,
  },
});