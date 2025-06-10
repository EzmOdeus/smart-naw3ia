import React from 'react';
import { View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { Layout } from '../../constants/Layout';
import { Text } from './Text';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { LanguageSwitch } from './LanguageSwitch';
interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  showSearch?: boolean;
  onSearchPress?: () => void;
  onMenuPress?: () => void;
  transparent?: boolean;
  rightContent?: React.ReactNode;
  onLanguageChange?: () => void;
}

export function Header({
  onLanguageChange,
  title = 'smart naw3ia',
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
      style={[styles.safeArea, transparent && styles.transparent]}
      edges={['top']}
    >
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          {showBackButton ? (
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.iconButton}
            >
              <AntDesign
                name="arrowleft"
                size={24}
                color={transparent ? Colors.white : Colors.primary[500]}
              />
            </TouchableOpacity>
          ) : onMenuPress ? (
            <TouchableOpacity onPress={onMenuPress} style={styles.iconButton}>
              <Entypo
                name="menu"
                size={24}
                color={transparent ? Colors.white : Colors.primary[500]}
              />
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
              <AntDesign
                name="search1"
                size={24}
                color={transparent ? Colors.white : Colors.primary[500]}
              />
            </TouchableOpacity>
          )}
          <LanguageSwitch onLanguageChange={onLanguageChange} />
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
    alignItems: 'flex-start',
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