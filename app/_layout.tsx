import { Slot, Stack } from "expo-router";
import "@/global.css";
import { HeroProvider } from "@/hooks/useHeroContext";

export default function RootLayout() {
  return (
    <HeroProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </HeroProvider>
  );
}
