import StaticDisplay from "@/components/data/StaticDisplay";
import StaminaBar from "@/components/stamina/StaminaBar";
import { useHeroContext } from "@/hooks/useHeroContext";
import { Slot } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

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
            <Text className="font-bold">Reset Short</Text>
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
            <Text className="font-bold">Reset Long</Text>
          </Pressable>
        </View>
        <View className="flex-1">
          <Pressable
            className="h-12 items-center justify-center bg-negative rounded-lg"
            onPress={() =>
              dispatch({
                type: "Take Damage",
                payload: state.stamina.recovery - 1,
              })
            }
          >
            <Text className="font-bold">Take Damage</Text>
          </Pressable>
        </View>
        <View className="flex-1">
          <Pressable
            className="h-12 items-center justify-center bg-positive rounded-lg"
            onPress={() => dispatch({ type: "Use Recovery" })}
          >
            <Text className="font-bold">Use Recovery</Text>
          </Pressable>
        </View>
      </View>
      <View className="p-2 border-b border-b-muted flex flex-col gap-2 bg-base">
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
        <StaminaBar className="self-end w-3/4" />
      </View>
      <Slot
        screenOptions={{
          headerShown: false,
        }}
      />
    </>
  );
}
