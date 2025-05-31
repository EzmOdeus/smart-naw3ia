import React from 'react';
import { Tabs } from 'expo-router';
import {  Platform } from 'react-native';
import { useTranslation } from '@/hooks/useTranslation';
import { Colors } from '@/constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
export default function TabLayout() {
  const { t } = useTranslation();

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
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: t('tabs.map'),
          tabBarIcon: ({ color, size }) => (
            <Entypo name="map" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: t('tabs.calendar'),
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Doctor"
        options={{
          title: t('tabs.doctor'),
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="eyeo" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: t('tabs.about'),
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="infocirlceo" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ChatbotModal"
        options={{
          title: t('tabs.Ai'),
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="API" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
