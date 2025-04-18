import StaticDisplay from "@/components/data/StaticDisplay";
import { useHeroContext } from "@/hooks/useHeroContext";
import React from "react";
import { Text, View } from "react-native";

export default function HeroAbilities() {
  const {
    state: { combat },
  } = useHeroContext();

  return (
    <View
      className="flex flex-col"
    >
      <View className="flex-row">
        <StaticDisplay
          value={combat.heroicResource.amount}
          labelTop={combat.heroicResource.name}
        />
        <StaticDisplay value={combat.surges} labelTop="surges" />
      </View>
      <Text>Abilities</Text>
    </View>
  );
}
