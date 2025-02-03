import MaterialBottomTabs from "@/layouts/MaterialBottomTabs";
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
    <MaterialBottomTabs screenOptions={{sceneStyle: {backgroundColor: "#1f2937"}}}>
      <MaterialTopTabs.Screen
        name="skills"
        options={{
          title: "Skills",
          tabBarIcon: () => (
            <Ionicons name="sparkles-outline" size={24} color="black" />
          ),
        }}
      />
      <MaterialTopTabs.Screen
        name="abilities"
        options={{
          title: "Abilities",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="sword" size={24} color="black" />
          ),
        }}
      />
      <MaterialTopTabs.Screen
        name="features"
        options={{
          title: "Features",
          tabBarIcon: () => (
            <Ionicons name="person-circle-outline" size={24} color="black" />
          ),
        }}
      />
      <MaterialTopTabs.Screen
        name="projects"
        options={{
          title: "Projects",
          tabBarIcon: () => (
            <MaterialIcons name="schedule" size={24} color="black" />
          ),
        }}
      />
      <MaterialTopTabs.Screen
        name="bio"
        options={{
          title: "Bio",
          tabBarIcon: () => (
            <FontAwesome5 name="book" size={24} color="black" />
          ),
        }}
      />
    </MaterialBottomTabs>
  );
}
