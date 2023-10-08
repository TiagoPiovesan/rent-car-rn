import React, { useCallback, useEffect } from 'react';
import { Home } from './src/screens/Home';
import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold } from '@expo-google-fonts/archivo'
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from '@expo-google-fonts/inter'
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import { Routes } from './src/routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppProvider } from './src/hooks';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded] = useFonts({
      Archivo_400Regular,
      Archivo_500Medium,
      Archivo_600SemiBold,
      Inter_400Regular,
      Inter_500Medium,
      Inter_600SemiBold
    })

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <SafeAreaProvider
          style={{ flex: 1 }} onLayout={onLayoutRootView}>
          <Routes />
        </SafeAreaProvider>
      </AppProvider>
    </ThemeProvider>
  );
}
