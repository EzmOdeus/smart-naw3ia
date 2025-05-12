import React from 'react';
import { View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, Menu, Search } from 'lucide-react-native';
import { Colors } from '../../constants/Colors';
import { Layout } from '../../constants/Layout';
import { Text } from './Text';
import { SafeAreaView } from 'react-native-safe-area-context';

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  showSearch?: boolean;
  onSearchPress?: () => void;
  onMenuPress?: () => void;
  transparent?: boolean;
  rightContent?: React.ReactNode;
}

export function Header({
  title,
  showBackButton = false,
  showSearch = false,
  onSearchPress,
  onMenuPress,
  transparent = false,
  rightContent,
}: HeaderProps) {
  const router = useRouter();

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        transparent && styles.transparent,
      ]}
      edges={['top']}
    >
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          {showBackButton ? (
            <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
              <ArrowLeft size={24} color={transparent ? Colors.white : Colors.primary[500]} />
            </TouchableOpacity>
          ) : onMenuPress ? (
            <TouchableOpacity onPress={onMenuPress} style={styles.iconButton}>
              <Menu size={24} color={transparent ? Colors.white : Colors.primary[500]} />
            </TouchableOpacity>
          ) : null}
        </View>

        {title && (
          <View style={styles.titleContainer}>
            <Text
              variant="h4"
              color={transparent ? Colors.white : Colors.primary[500]}
              align="center"
              numberOfLines={1}
            >
              {title}
            </Text>
          </View>
        )}

        <View style={styles.rightContainer}>
          {showSearch && (
            <TouchableOpacity onPress={onSearchPress} style={styles.iconButton}>
              <Search size={24} color={transparent ? Colors.white : Colors.primary[500]} />
            </TouchableOpacity>
          )}
          {rightContent}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Colors.white,
    ...Platform.select({
      android: {
        elevation: 4,
      },
      ios: {
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
    }),
  },
  transparent: {
    backgroundColor: 'transparent',
    ...Platform.select({
      android: {
        elevation: 0,
      },
      ios: {
        shadowOpacity: 0,
      },
    }),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    paddingHorizontal: Layout.spacing.m,
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  titleContainer: {
    flex: 2,
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconButton: {
    padding: Layout.spacing.xs,
  },
});