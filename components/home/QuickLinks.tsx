import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { Text } from '../ui/Text';
import { Colors } from '../../constants/Colors';
import { Layout } from '../../constants/Layout';
import { useTranslation } from '../../hooks/useTranslation';
import { 
  Users, 
  BookOpen, 
  Map, 
  CalendarDays, 
  Newspaper, 
  Info, 
  GraduationCap,
  Building
} from 'lucide-react-native';

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
      icon: <BookOpen size={24} color={Colors.white} />,
      color: Colors.primary[500],
    },
    {
      id: 'faculty',
      title: t('tabs.faculty'),
      route: '/faculty',
      icon: <Users size={24} color={Colors.white} />,
      color: Colors.secondary[500],
    },
    {
      id: 'map',
      title: t('tabs.map'),
      route: '/map',
      icon: <Map size={24} color={Colors.white} />,
      color: Colors.accent[500],
    },
    {
      id: 'calendar',
      title: t('tabs.calendar'),
      route: '/calendar',
      icon: <CalendarDays size={24} color={Colors.white} />,
      color: Colors.success[500],
    },
    {
      id: 'news',
      title: t('tabs.news'),
      route: '/news',
      icon: <Newspaper size={24} color={Colors.white} />,
      color: Colors.warning[500],
    },
    {
      id: 'about',
      title: t('tabs.about'),
      route: '/about',
      icon: <Info size={24} color={Colors.white} />,
      color: Colors.error[500],
    },
    {
      id: 'programs',
      title: t('tabs.programs'),
      route: '/departments',
      icon: <GraduationCap size={24} color={Colors.white} />,
      color: Colors.primary[700],
    },
    {
      id: 'facilities',
      title: t('tabs.facilities'),
      route: '/map',
      icon: <Building size={24} color={Colors.white} />,
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