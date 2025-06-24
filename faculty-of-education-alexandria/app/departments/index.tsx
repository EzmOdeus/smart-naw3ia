import React, { useState, useCallback } from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { Header } from '@/components/ui/Header';
import { SearchBar } from '@/components/ui/SearchBar';
import { Card } from '@/components/ui/Card';
import { Text } from '@/components/ui/Text';
import { useTranslation } from '@/hooks/useTranslation';
import { departments, Department } from '@/data/departments';

export default function DepartmentsScreen() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredDepartments = departments.filter(
    (dept) => dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dept.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDepartmentPress = useCallback((id: string) => {
    router.push(`/departments/${id}`);
  }, []);

  const renderDepartmentItem = ({ item }: { item: Department }) => (
    <Card
      style={styles.departmentCard}
      onPress={() => handleDepartmentPress(item.id)}
    >
      <Image
        source={item.image
          ? item.image
            : require('./../../assets/images/light-yagami-ryuk-misa-amane-death-note-l-c4f2845291fb78e64513dc99de8f2a68.png')}
        style={styles.departmentImage}
      />
      <View style={styles.departmentInfo}>
        <Text variant="h4" color="primary.500">
          {item.name}
        </Text>
        <Text
          variant="body"
          color="gray.600"
          style={styles.description}
          numberOfLines={3}
        >
          {item.description}
        </Text>
        <Text variant="subtitle" color="secondary.500" style={styles.headLabel}>
          {t('departments.head')}: {item.head.name}
        </Text>
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container} edges={['right', 'left', 'bottom']}>
      <Header
        title={t('departments.title')}
        showBackButton
      />
      
      <View style={styles.searchContainer}>
        <SearchBar
          placeholder={t('common.search')}
          onSearch={setSearchQuery}
          defaultValue={searchQuery}
        />
      </View>
      
      <Text variant="subtitle" color="gray.600" style={styles.description}>
        {t('departments.description')}
      </Text>
      
      <FlatList
        data={filteredDepartments}
        renderItem={renderDepartmentItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  searchContainer: {
    padding: Layout.spacing.m,
    paddingBottom: 0,
  },
  description: {
    paddingHorizontal: Layout.spacing.m,
    paddingTop: Layout.spacing.m,
    paddingBottom: Layout.spacing.s,
  },
  listContent: {
    padding: Layout.spacing.m,
  },
  departmentCard: {
    marginBottom: Layout.spacing.m,
    padding: 0,
    overflow: 'hidden',
  },
  departmentImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  departmentInfo: {
    padding: Layout.spacing.m,
  },
  headLabel: {
    marginTop: Layout.spacing.m,
  },
});