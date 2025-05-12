import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTranslation } from '../../hooks/useTranslation';
import { Colors } from '../../constants/Colors';
import { Layout } from '../../constants/Layout';
import { Text } from './Text';

export function LanguageSwitch({ onLanguageChange }: { onLanguageChange?: () => void }) {
  const { changeLanguage, currentLanguage } = useTranslation();

  const handleLanguageChange = (lang: 'ar' | 'en') => {
    changeLanguage(lang);
    if (onLanguageChange) onLanguageChange();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.languageButton,
          currentLanguage === 'ar' && styles.activeLanguage,
        ]}
        onPress={() => handleLanguageChange('ar')}
      >
        <Text
          style={[
            styles.languageText,
            currentLanguage === 'ar' && styles.activeLanguageText,
          ]}
        >
          العربية
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.languageButton,
          currentLanguage === 'en' && styles.activeLanguage,
        ]}
        onPress={() => handleLanguageChange('en')}
      >
        <Text
          style={[
            styles.languageText,
            currentLanguage === 'en' && styles.activeLanguageText,
          ]}
        >
          English
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: Layout.borderRadius.round,
    backgroundColor: Colors.gray[100],
    padding: 2,
  },
  languageButton: {
    paddingVertical: Layout.spacing.xs,
    paddingHorizontal: Layout.spacing.m,
    borderRadius: Layout.borderRadius.round,
  },
  activeLanguage: {
    backgroundColor: Colors.primary[500],
  },
  languageText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.gray[700],
  },
  activeLanguageText: {
    color: Colors.white,
  },
});