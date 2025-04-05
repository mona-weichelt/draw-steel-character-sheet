import MaterialTopTabs from "@/layouts/MaterialTopTabs";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React from "react";

export default function SheetLayout() {
  return (
    <MaterialTopTabs
      tabBarPosition="bottom"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "var(--base)",
          borderTopColor: "var(--muted)",
          borderTopWidth: "1px",
        },
        tabBarLabelStyle: { fontSize: 12, color: "var(--foreground)" },
        sceneStyle: { backgroundColor: "var(--base)" },
      }}
    >
      <MaterialTopTabs.Screen
        name="skills"
        options={{
          title: "Skills",
          tabBarIcon: () => (
            <Ionicons
              name="sparkles-outline"
              size={24}
              color="var(--foreground)"
            />
          ),
        }}
      />
      <MaterialTopTabs.Screen
        name="abilities"
        options={{
          title: "Abilities",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="sword"
              size={24}
              color="var(--foreground)"
            />
          ),
        }}
      />
      <MaterialTopTabs.Screen
        name="features"
        options={{
          title: "Features",
          tabBarIcon: () => (
            <Ionicons
              name="person-circle-outline"
              size={24}
              color="var(--foreground)"
            />
          ),
        }}
      />
      <MaterialTopTabs.Screen
        name="projects"
        options={{
          title: "Projects",
          tabBarIcon: () => (
            <MaterialIcons
              name="schedule"
              size={24}
              color="var(--foreground)"
            />
          ),
        }}
      />
      <MaterialTopTabs.Screen
        name="bio"
        options={{
          title: "Bio",
          tabBarIcon: () => (
            <FontAwesome5 name="book" size={24} color="var(--foreground)" />
          ),
        }}
      />
    </MaterialTopTabs>
  );
}
