import React from 'react';
import { View, StyleSheet, ScrollView, Image, Share, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, Stack } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { Header } from '@/components/ui/Header';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { useTranslation } from '@/hooks/useTranslation';
import { news } from '@/data/news';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
export default function NewsDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t } = useTranslation();
  
  const newsItem = news.find((item) => item.id === id);
  
  if (!newsItem) {
    return (
      <SafeAreaView style={styles.container}>
        <Header title={t('news.title')} showBackButton />
        <View style={styles.errorContainer}>
          <Text>News item not found</Text>
        </View>
      </SafeAreaView>
    );
  }
  
  const handleShare = async () => {
    try {
      await Share.share({
        title: newsItem.title,
        message: Platform.OS === 'ios' ? newsItem.title : `${newsItem.title}\n\n${newsItem.summary}\n\n`,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  return (
    <SafeAreaView style={styles.container} edges={['right', 'left', 'bottom']}>
      <Stack.Screen options={{ title: newsItem.title }} />

      <Header title="" showBackButton transparent />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: newsItem.image }} style={styles.heroImage} />
          <View style={styles.overlay} />
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.categoryRow}>
            <View
              style={[
                styles.categoryBadge,
                styles[`categoryBadge_${newsItem.category}`],
              ]}
            >
              <Text variant="caption" color="white">
                {t(`news.${newsItem.category}`)}
              </Text>
            </View>

            <View style={styles.dateContainer}>
              <AntDesign name="calendar" size={16} color={Colors.gray[500]} />
              <Text variant="caption" color="gray.500" style={styles.dateText}>
                {formatDate(newsItem.date)}
              </Text>
            </View>
          </View>

          <Text variant="h3" color="primary.500" style={styles.title}>
            {newsItem.title}
          </Text>

          <Text variant="subtitle" color="gray.600" style={styles.summary}>
            {newsItem.summary}
          </Text>

          <Text variant="caption" color="gray.500" style={styles.authorText}>
            {t('by')} {newsItem.author}
          </Text>

          <View style={styles.contentText}>
            {newsItem.content.split('\n\n').map((paragraph, index) => (
              <Text
                key={index}
                variant="body"
                color="gray.800"
                style={styles.paragraph}
              >
                {paragraph}
              </Text>
            ))}
          </View>

          <View style={styles.shareContainer}>
            <Button
              variant="outline"
              leftIcon={<Entypo name="share" size={18} color={Colors.primary[500]}/>}
              onPress={handleShare}
            >
              {t('news.shareNews')}
            </Button>
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
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    height: 300,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  contentContainer: {
    padding: Layout.spacing.l,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Layout.spacing.m,
  },
  categoryBadge: {
    paddingVertical: 4,
    paddingHorizontal: Layout.spacing.m,
    borderRadius: Layout.borderRadius.s,
    backgroundColor: Colors.primary[500],
  },
  categoryBadge_academic: {
    backgroundColor: Colors.primary[500],
  },
  categoryBadge_event: {
    backgroundColor: Colors.secondary[500],
  },
  categoryBadge_research: {
    backgroundColor: Colors.accent[500],
  },
  categoryBadge_student: {
    backgroundColor: Colors.success[500],
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    marginLeft: Layout.spacing.xs,
  },
  title: {
    marginBottom: Layout.spacing.m,
  },
  summary: {
    marginBottom: Layout.spacing.m,
    lineHeight: 24,
  },
  authorText: {
    marginBottom: Layout.spacing.l,
  },
  contentText: {
    marginBottom: Layout.spacing.l,
  },
  paragraph: {
    marginBottom: Layout.spacing.m,
    lineHeight: 24,
  },
  shareContainer: {
    marginVertical: Layout.spacing.m,
  },
});