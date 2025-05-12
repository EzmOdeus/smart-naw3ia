import React from 'react';
import { View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { Layout } from '../../constants/Layout';
import { Text } from '../ui/Text';
import { Card } from '../ui/Card';
import { useTranslation } from '../../hooks/useTranslation';
import { NewsItem } from '../../data/news';

interface LatestNewsProps {
  news: NewsItem[];
}

export function LatestNews({ news }: LatestNewsProps) {
  const { t } = useTranslation();
  
  const handlePressNews = (id: string) => {
    router.push(`/news/${id}`);
  };

  const handleSeeAll = () => {
    router.push('/news');
  };

  const renderNewsItem = ({ item }: { item: NewsItem }) => (
    <Card
      style={styles.newsCard}
      onPress={() => handlePressNews(item.id)}
    >
      <Image source={{ uri: item.image }} style={styles.newsImage} />
      <View style={styles.newsInfo}>
        <View style={styles.categoryContainer}>
          <Text style={[styles.category, styles[`category_${item.category}`]]}>
            {t(`news.${item.category}`)}
          </Text>
        </View>
        <Text variant="subtitle" color="gray.800" numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>
        <Text variant="caption" color="gray.500" style={styles.date}>
          {item.date}
        </Text>
      </View>
    </Card>
  );

  const latestNews = news.slice(0, 5);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="h3" color="primary.500">
          {t('home.latestNews')}
        </Text>
        <TouchableOpacity onPress={handleSeeAll}>
          <Text variant="subtitle" color="secondary.500">
            {t('common.seeAll')}
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={latestNews}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: Layout.spacing.l,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Layout.spacing.m,
    paddingHorizontal: Layout.spacing.m,
  },
  listContent: {
    paddingHorizontal: Layout.spacing.m,
    paddingBottom: Layout.spacing.s,
  },
  newsCard: {
    width: 300,
    marginRight: Layout.spacing.m,
    padding: 0,
    overflow: 'hidden',
  },
  newsImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  newsInfo: {
    padding: Layout.spacing.m,
  },
  categoryContainer: {
    marginBottom: Layout.spacing.xs,
  },
  category: {
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: Layout.spacing.s,
    paddingVertical: Layout.spacing.xs,
    borderRadius: Layout.borderRadius.s,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  category_academic: {
    backgroundColor: Colors.primary[100],
    color: Colors.primary[700],
  },
  category_event: {
    backgroundColor: Colors.secondary[100],
    color: Colors.secondary[700],
  },
  category_research: {
    backgroundColor: Colors.accent[100],
    color: Colors.accent[700],
  },
  category_student: {
    backgroundColor: Colors.success[100],
    color: Colors.success[700],
  },
  title: {
    marginBottom: Layout.spacing.xs,
  },
  date: {
    marginTop: Layout.spacing.s,
  },
});