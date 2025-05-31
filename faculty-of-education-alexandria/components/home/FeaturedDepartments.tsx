import React from 'react';
import { View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Layout } from '../../constants/Layout';
import { Text } from '../ui/Text';
import { Card } from '../ui/Card';
import { useTranslation } from '../../hooks/useTranslation';
import { Department } from '../../data/departments';

interface FeaturedDepartmentsProps {
  departments: Department[];
}

export function FeaturedDepartments({ departments }: FeaturedDepartmentsProps) {
  const { t } = useTranslation();
  const featuredDepartments = departments.filter(dept => dept.featured);

  const handlePressDepartment = (id: string) => {
    router.push(`/departments/${id}`);
  };

  const handleSeeAll = () => {
    router.push('/departments');
  };

  const renderDepartment = ({ item }: { item: Department }) => (
    <Card
      style={styles.departmentCard}
      onPress={() => handlePressDepartment(item.id)}
    >
      <Image
        source={{
          uri: item.image
            ? item.image
            : require('./../../assets/images/light-yagami-ryuk-misa-amane-death-note-l-c4f2845291fb78e64513dc99de8f2a68.png'),
        }}
        style={styles.departmentImage}
      />
      <View style={styles.departmentInfo}>
        <Text variant="subtitle" color="primary.500" numberOfLines={1}>
          {item.name}
        </Text>
        <Text
          variant="caption"
          color="gray.600"
          numberOfLines={2}
          style={styles.description}
        >
          {item.description}
        </Text>
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="h3" color="primary.500">
          {t('home.featuredDepartments')}
        </Text>
        <TouchableOpacity onPress={handleSeeAll}>
          <Text variant="subtitle" color="secondary.500">
            {t('common.seeAll')}
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={featuredDepartments}
        renderItem={renderDepartment}
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
  departmentCard: {
    width: 280,
    marginRight: Layout.spacing.m,
    padding: 0,
    overflow: 'hidden',
  },
  departmentImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  departmentInfo: {
    padding: Layout.spacing.m,
  },
  description: {
    marginTop: Layout.spacing.xs,
  },
});