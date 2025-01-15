import StaticDisplay from "@/components/data/StaticDisplay";
import StaminaDisplay from "@/components/stamina/StaminaDisplay";
import { useHeroContext } from "@/hooks/useHeroContext";
import { Slot } from "expo-router";
import { View, Text } from "react-native";

export default function SheetLayout() {
  const { state, dispatch } = useHeroContext();
  return (
    <>
      <View className="flex flex-row flex-wrap justify-between p-2 border-b">
        <StaticDisplay
          value={state.combat.speed + "(" + (state.combat.disengage + 1) + ")"}
          labelBottom="speed"
        />
        <StaticDisplay value={state.combat.stability} labelBottom="stability" />
        <StaticDisplay
          value={state.adventure.heroTokens}
          labelTop="hero"
          labelBottom="tokens"
        />
        <StaticDisplay
          value={state.adventure.victories}
          labelBottom="victories"
        />
        <StaminaDisplay />
      </View>
      <Slot screenOptions={{ headerShown: false }} />
    </>
  );
}