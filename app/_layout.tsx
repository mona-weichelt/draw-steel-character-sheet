import { Slot, Stack } from "expo-router";
import "@/global.css";
import { HeroProvider } from "@/hooks/useHeroContext";

export default function RootLayout() {
  return (
    <HeroProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </HeroProvider>
  );
}
