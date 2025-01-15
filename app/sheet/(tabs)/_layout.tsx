import { Slot, Tabs } from "expo-router";
import { View, Text } from "react-native";

export default function SheetLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="skills"
        options={{
          title: "Skills",
        }}
      />
      <Tabs.Screen
        name="abilities"
        options={{
          title: "Abilities",
        }}
      />
      <Tabs.Screen
        name="features"
        options={{
          title: "Features",
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: "Projects",
        }}
      />
      <Tabs.Screen
        name="bio"
        options={{
          title: "Bio",
        }}
      />
    </Tabs>
  );
}
