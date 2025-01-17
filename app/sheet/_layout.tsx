import StaticDisplay from "@/components/data/StaticDisplay";
import StaminaBar from "@/components/stamina/StaminaBar";
import StaminaDisplay from "@/components/stamina/StaminaDisplay";
import { useHeroContext } from "@/hooks/useHeroContext";
import { Slot } from "expo-router";
import { View, Text, Pressable } from "react-native";

export default function SheetLayout() {
  const { state, dispatch } = useHeroContext();
  return (
    <>
      <View className="flex flex-row gap-2 p-2">
        <View className="flex-1">
          <Pressable
            className="h-12 items-center justify-center bg-blue-600 rounded-lg"
            onPress={() =>
              dispatch({
                type: "Reset Short",
              })
            }
          >
            <Text className="text-white font-bold">Reset Short</Text>
          </Pressable>
        </View>
        <View className="flex-1">
          <Pressable
            className="h-12 items-center justify-center bg-blue-600 rounded-lg"
            onPress={() =>
              dispatch({
                type: "Reset Long",
              })
            }
          >
            <Text className="text-white font-bold">Reset Long</Text>
          </Pressable>
        </View>
        <View className="flex-1">
          <Pressable
            className="h-12 items-center justify-center bg-red-600 rounded-lg"
            onPress={() =>
              dispatch({
                type: "Take Damage",
                payload: 6,
              })
            }
          >
            <Text className="text-white font-bold">Take Damage</Text>
          </Pressable>
        </View>
        <View className="flex-1">
          <Pressable
            className="h-12 items-center justify-center bg-green-600 rounded-lg"
            onPress={() => dispatch({ type: "Use Recovery" })}
          >
            <Text className="text-white font-bold">Use Recovery</Text>
          </Pressable>
        </View>
      </View>
      <View className="p-2 border-b bg-gray-800 flex flex-col gap-2">
        <View className="flex flex-row flex-wrap justify-between">
          <StaticDisplay
            value={
              state.combat.speed + " (" + (state.combat.disengage + 1) + ")"
            }
            labelBottom="speed"
          />
          <StaticDisplay
            value={state.combat.stability}
            labelBottom="stability"
          />
          <StaticDisplay
            value={state.adventure.heroTokens}
            labelTop="hero"
            labelBottom="tokens"
          />
          <StaticDisplay
            value={state.adventure.victories}
            labelBottom="victories"
          />
        </View>
        <StaminaBar className="w-3/4 self-end" />
      </View>
      <Slot screenOptions={{ headerShown: false }} />
    </>
  );
}
