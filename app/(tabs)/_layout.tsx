import React from 'react';
import { Tabs } from 'expo-router';
import { useColorScheme, Platform } from 'react-native';
import { useTranslation } from '@/hooks/useTranslation';
import { Colors } from '@/constants/Colors';
import { 
  Home,
  BookOpen,
  Users,
  Map,
  Calendar,
  Newspaper,
  Info, 
} from 'lucide-react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { t, isRTL } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary[500],
        tabBarInactiveTintColor: Colors.gray[500],
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto-Regular',
        },
        tabBarStyle: {
          backgroundColor: Colors.white,
          borderTopColor: Colors.gray[200],
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t('tabs.home'),
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: t('tabs.map'),
          tabBarIcon: ({ color, size }) => <Map size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: t('tabs.calendar'),
          tabBarIcon: ({ color, size }) => <Calendar size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: t('tabs.news'),
          tabBarIcon: ({ color, size }) => <Newspaper size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: t('tabs.about'),
          tabBarIcon: ({ color, size }) => <Info size={size} color={color} />
        }}
      />
    </Tabs>
  );
}