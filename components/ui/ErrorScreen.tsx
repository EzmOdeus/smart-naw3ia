import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from './Button';
import { Text } from './Text';
import { Colors } from '../../constants/Colors';
import { Layout } from '../../constants/Layout';
import { useTranslation } from '../../hooks/useTranslation';
import { AlertCircle } from 'lucide-react-native';

interface ErrorScreenProps {
  message?: string;
  onRetry?: () => void;
}

export function ErrorScreen({ message, onRetry }: ErrorScreenProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <AlertCircle size={48} color={Colors.error[500]} />
      <Text style={styles.message}>
        {message || t('common.error')}
      </Text>
      {onRetry && (
        <Button
          variant="primary"
          style={styles.button}
          onPress={onRetry}
        >
          {t('common.retry')}
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Layout.spacing.l,
    backgroundColor: Colors.white,
  },
  message: {
    marginTop: Layout.spacing.m,
    marginBottom: Layout.spacing.l,
    fontSize: 16,
    color: Colors.gray[700],
    textAlign: 'center',
  },
  button: {
    minWidth: 120,
  },
});