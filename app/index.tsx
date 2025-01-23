import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1">
      <Link
        className="w-full h-full text-center bg-blue-200"
        href="/sheet/(tabs)/skills"
      >
        Go to sheet
      </Link>
    </View>
  );
}
