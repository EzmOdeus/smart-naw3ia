import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Text } from './Text';
import { useTranslation } from '../../hooks/useTranslation';

export function LoadingScreen() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.primary[500]} />
      <Text style={styles.text}>{t('common.loading')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  text: {
    marginTop: 16,
    fontSize: 16,
    color: Colors.gray[600],
  },
});