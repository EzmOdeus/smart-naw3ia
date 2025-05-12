import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../constants/Colors';
import { Layout } from '../../constants/Layout';
import { Text } from '../ui/Text';
import { useTranslation } from '../../hooks/useTranslation';

const { width } = Dimensions.get('window');
const isSmallDevice = width < 375;

export function Hero() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg' }}
        style={styles.backgroundImage}
      >
        <LinearGradient
          colors={['rgba(10, 61, 98, 0.7)', 'rgba(10, 61, 98, 0.9)']}
          style={styles.gradient}
        >
          <View style={styles.contentContainer}>
            <Text
              variant="h1"
              color="white"
              align="center"
              style={isSmallDevice ? styles.titleSmall : styles.title}
            >
              {t('home.welcome')}
            </Text>
            <Text
              variant="h3"
              color="secondary.500"
              align="center"
              style={styles.subtitle}
            >
              {t('home.university')}
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    ...Platform.select({
      web: {
        height: 400,
      },
    }),
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    padding: Layout.spacing.l,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    lineHeight: 40,
    marginBottom: Layout.spacing.m,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleSmall: {
    fontSize: 24,
    lineHeight: 32,
    marginBottom: Layout.spacing.m,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '600',
    textAlign: 'center',
  },
});