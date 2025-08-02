import { LikedProvider } from '@/components/context/LikedContext';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';



export default function RootLayout() {

  
  return (
    <ThemeProvider value={DefaultTheme}>
      <LikedProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="home/index" options={{ title: "HomeScreen" }} />

          <Stack.Screen name="+not-found" />
        </Stack>
      </LikedProvider>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
