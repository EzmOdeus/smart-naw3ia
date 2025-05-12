import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { Header } from '@/components/ui/Header';
import { SearchBar } from '@/components/ui/SearchBar';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';
import { useTranslation } from '@/hooks/useTranslation';
import { news, NewsItem } from '@/data/news';

export default function NewsScreen() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const handleNewsPress = (id: string) => {
    router.push(`/news/${id}`);
  };
  
  const handleCategoryPress = (category: string | null) => {
    setActiveCategory(activeCategory === category ? null : category);
  };
  
  const filteredNews = news.filter(item => {
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = activeCategory === null || item.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  const renderNewsItem = ({ item }: { item: NewsItem }) => (
    <Card
      style={styles.newsCard}
      onPress={() => handleNewsPress(item.id)}
    >
      <Image source={{ uri: item.image }} style={styles.newsImage} />
      <View style={styles.newsContent}>
        <View style={styles.newsHeader}>
          <View style={[
            styles.categoryBadge,
            styles[`categoryBadge_${item.category}`],
          ]}>
            <Text variant="caption" color="white">
              {t(`news.${item.category}`)}
            </Text>
          </View>
          <Text variant="caption" color="gray.500">
            {formatDate(item.date)}
          </Text>
        </View>
        
        <Text variant="h4" color="primary.500" style={styles.newsTitle}>
          {item.title}
        </Text>
        
        <Text variant="body" color="gray.600" numberOfLines={3} style={styles.newsSummary}>
          {item.summary}
        </Text>
        
        <TouchableOpacity
          style={styles.readMoreButton}
          onPress={() => handleNewsPress(item.id)}
        >
          <Text variant="subtitle" color="secondary.500">
            {t('news.readMore')}
          </Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
  
  return (
    <SafeAreaView style={styles.container} edges={['right', 'left', 'bottom']}>
      <Header
        title={t('news.title')}
        showBackButton={false}
      />
      
      <View style={styles.searchContainer}>
        <SearchBar
          placeholder={t('common.search')}
          onSearch={setSearchQuery}
          defaultValue={searchQuery}
        />
      </View>
      
      <View style={styles.categoriesContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesList}
        >
          <TouchableOpacity
            style={[
              styles.categoryItem,
              activeCategory === null && styles.activeCategoryItem,
            ]}
            onPress={() => handleCategoryPress(null)}
          >
            <Text
              variant="caption"
              color={activeCategory === null ? 'white' : 'primary.500'}
            >
              {t('news.latest')}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.categoryItem,
              activeCategory === 'academic' && styles.activeCategoryItem,
              styles.categoryItem_academic,
            ]}
            onPress={() => handleCategoryPress('academic')}
          >
            <Text
              variant="caption"
              color={activeCategory === 'academic' ? 'white' : 'primary.700'}
            >
              {t('news.academic')}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.categoryItem,
              activeCategory === 'event' && styles.activeCategoryItem,
              styles.categoryItem_event,
            ]}
            onPress={() => handleCategoryPress('event')}
          >
            <Text
              variant="caption"
              color={activeCategory === 'event' ? 'white' : 'secondary.700'}
            >
              {t('news.events')}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.categoryItem,
              activeCategory === 'research' && styles.activeCategoryItem,
              styles.categoryItem_research,
            ]}
            onPress={() => handleCategoryPress('research')}
          >
            <Text
              variant="caption"
              color={activeCategory === 'research' ? 'white' : 'accent.700'}
            >
              {t('news.research')}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.categoryItem,
              activeCategory === 'student' && styles.activeCategoryItem,
              styles.categoryItem_student,
            ]}
            onPress={() => handleCategoryPress('student')}
          >
            <Text
              variant="caption"
              color={activeCategory === 'student' ? 'white' : 'success.700'}
            >
              {t('news.student')}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      
      <FlatList
        data={filteredNews}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.newsList}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

import { ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  searchContainer: {
    padding: Layout.spacing.m,
    paddingBottom: 0,
  },
  categoriesContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[200],
  },
  categoriesList: {
    flexDirection: 'row',
    paddingVertical: Layout.spacing.m,
    paddingHorizontal: Layout.spacing.m,
  },
  categoryItem: {
    paddingVertical: Layout.spacing.xs,
    paddingHorizontal: Layout.spacing.m,
    marginRight: Layout.spacing.s,
    borderRadius: Layout.borderRadius.s,
    borderWidth: 1,
    borderColor: Colors.primary[500],
  },
  categoryItem_academic: {
    borderColor: Colors.primary[700],
  },
  categoryItem_event: {
    borderColor: Colors.secondary[700],
  },
  categoryItem_research: {
    borderColor: Colors.accent[700],
  },
  categoryItem_student: {
    borderColor: Colors.success[700],
  },
  activeCategoryItem: {
    backgroundColor: Colors.primary[500],
  },
  newsList: {
    padding: Layout.spacing.m,
  },
  newsCard: {
    marginBottom: Layout.spacing.l,
    padding: 0,
    overflow: 'hidden',
  },
  newsImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  newsContent: {
    padding: Layout.spacing.m,
  },
  newsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Layout.spacing.s,
  },
  categoryBadge: {
    paddingVertical: 2,
    paddingHorizontal: Layout.spacing.s,
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
  newsTitle: {
    marginBottom: Layout.spacing.s,
  },
  newsSummary: {
    lineHeight: 24,
  },
  readMoreButton: {
    marginTop: Layout.spacing.m,
    alignSelf: 'flex-start',
  },
});