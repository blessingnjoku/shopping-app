import { LikedProvider } from "@/components/context/LikedContext";
import { ThemeProviderCustom } from "@/components/context/ThemeContext";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  const scheme = useColorScheme();

  return (
    <ThemeProvider value={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <LikedProvider>
        <ThemeProviderCustom>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="home" options={{ title: "HomeScreen" }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </ThemeProviderCustom>
      </LikedProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
