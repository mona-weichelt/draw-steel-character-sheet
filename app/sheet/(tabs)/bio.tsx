import { useHeroContext } from "@/hooks/useHeroContext";
import React from "react";
import { Text, View } from "react-native";

export default function HeroABio() {
  const { state } = useHeroContext();
  return (
    <View>
      <Text>Character Name: {state.name}</Text>
      <Text>Ancestry: {state.ancestry}</Text>
      <Text>Class: {state.class}</Text>
      <Text>Career: NYI</Text>
      <Text>Subclasses: NYI</Text>
      <Text>XP: NYI</Text>
      <Text>Size: NYI</Text>
    </View>
  );
}
