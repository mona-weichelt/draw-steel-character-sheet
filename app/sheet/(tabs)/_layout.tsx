import { Tabs } from "expo-router";
import {
  FontAwesome5,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Text } from "react-native";

export default function SheetLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="skills"
        options={{
          title: "Skills",
          tabBarIcon: () => (
            <Ionicons name="sparkles-outline" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="abilities"
        options={{
          title: "Abilities",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="sword" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="features"
        options={{
          title: "Features",
          tabBarIcon: () => (
            <Ionicons name="person-circle-outline" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: "Projects",
          tabBarIcon: () => (
            <MaterialIcons name="schedule" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="bio"
        options={{
          title: "Bio",
          tabBarIcon: () => (
            <FontAwesome5 name="book" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
