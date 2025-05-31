import { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Cairo_400Regular, Cairo_500Medium, Cairo_700Bold } from '@expo-google-fonts/cairo';
import * as SplashScreen from 'expo-splash-screen';

export function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const [fontsLoaded, fontError] = useFonts({
    'Roboto-Regular': Roboto_400Regular,
    'Roboto-Medium': Roboto_500Medium,
    'Roboto-Bold': Roboto_700Bold,
    'Cairo-Regular': Cairo_400Regular,
    'Cairo-Medium': Cairo_500Medium,
    'Cairo-Bold': Cairo_700Bold,
  });

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load additional fonts if needed
        await Font.loadAsync({
          // Add any custom fonts here
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    if (fontsLoaded || fontError) {
      loadResourcesAndDataAsync();
    }
  }, [fontsLoaded, fontError]);

  return isLoadingComplete && fontsLoaded;
}