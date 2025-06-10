import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { Text } from '../ui/Text';
import { Colors } from '../../constants/Colors';
import { Layout } from '../../constants/Layout';
import { useTranslation } from '../../hooks/useTranslation';

import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface QuickLink {
  id: string;
  title: string;
  route: string;
  icon: React.ReactNode;
  color: string;
}

export function QuickLinks() {
  const { t } = useTranslation();

  const quickLinks: QuickLink[] = [
    {
      id: 'departments',
      title: t('tabs.departments'),
      route: '/departments',
      icon: <Feather name="book-open" size={24} color={Colors.white} />,
      color: Colors.primary[500],
    },
    {
      id: 'faculty',
      title: t('tabs.faculty'),
      route: '/faculty',
      icon: <Feather name="users" size={24} color={Colors.white} />,
      color: Colors.secondary[500],
    },
    {
      id: 'map',
      title: t('tabs.map'),
      route: '/map',
      icon: <Feather name="map" size={24} color={Colors.white} />,
      color: Colors.accent[500],
    },
    {
      id: 'calendar',
      title: t('tabs.calendar'),
      route: '/calendar',
      icon: <Feather name="calendar" size={24} color={Colors.white} />,
      color: Colors.success[500],
    },
    {
      id: 'news',
      title: t('tabs.news'),
      route: '/news',
      icon: <FontAwesome name="newspaper-o" size={24} color={Colors.white} />,
      color: Colors.warning[500],
    },
    {
      id: 'about',
      title: t('tabs.about'),
      route: '/about',
      icon: <Feather name="info" size={24} color={Colors.white} />,
      color: Colors.error[500],
    },
    {
      id: 'programs',
      title: t('tabs.programs'),
      route: '/departments',
      icon: (
        <FontAwesome name="graduation-cap" size={24} color={Colors.white} />
      ),
      color: Colors.primary[700],
    },
    {
      id: 'facilities',
      title: t('tabs.facilities'),
      route: '/map',
      icon: <FontAwesome name="building-o" size={24} color={Colors.white} />,
      color: Colors.secondary[700],
    },
  ];
  const handleQuickLinkPress = (route: string) => {
    router.push(route as any);
  };

  return (
    <View style={styles.container}>
      <Text variant="h3" color="primary.500" style={styles.title}>
        {t('home.quickLinks')}
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.linksContainer}
      >
        {quickLinks.map((link) => (
          <TouchableOpacity
            key={link.id}
            style={[styles.linkItem, { backgroundColor: link.color }]}
            onPress={() => handleQuickLinkPress(link.route)}
          >
            <View style={styles.iconContainer}>{link.icon}</View>
            <Text variant="caption" color="white" style={styles.linkText}>
              {link.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: Layout.spacing.l,
    paddingHorizontal: Layout.spacing.m,
    alignItems:'center'
  },
  title: {
    marginBottom: Layout.spacing.m,
  },
  linksContainer: {
    paddingVertical: Layout.spacing.s,
  },
  linkItem: {
    width: 100,
    height: 100,
    borderRadius: Layout.borderRadius.m,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Layout.spacing.m,
    padding: Layout.spacing.s,
  },
  iconContainer: {
    marginBottom: Layout.spacing.s,
  },
  linkText: {
    textAlign: 'center',
  },
});