import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { useCachedResources } from '@/hooks/useCachedResources';
import { LoadingScreen } from '@/components/ui/LoadingScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LanguageProvider } from '@/hooks/LanguageContext';

export default function RootLayout() {
  useFrameworkReady();
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return <LoadingScreen />;
  }

  return (
    <LanguageProvider>
      <SafeAreaProvider>
        <StatusBar style="auto" animated/>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" options={{ title: 'Oops!' }} />
        </Stack>
      </SafeAreaProvider>
    </LanguageProvider>
  );
}