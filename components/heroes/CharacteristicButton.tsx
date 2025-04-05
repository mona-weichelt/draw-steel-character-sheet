import React from "react";
import { Characteristic, CharacteristicShorthand } from "@/types/core";
import { Pressable, Text, View } from "react-native";

const CharacteristicButton = ({
  value,
  characteristic,
}: {
  value: number;
  characteristic: Characteristic;
}) => {
  return (
    <View className="flex-1 p-1 pt-1 border border-muted rounded-lg">
      <Text className="font-bold text-foreground text-xs text-center">
        {CharacteristicShorthand[characteristic]}
      </Text>
      <Pressable className="flex-1 p-2 pt-3 flex-row justify-center items-center border border-muted bg-base rounded-lg">
        <Text className="font-bold text-2xl text-muted">
          {value < 0 ? "-" : "+"}
        </Text>
        <Text className="font-bold text-foreground text-2xl">
          {Math.abs(value)}
        </Text>
      </Pressable>
    </View>
  );
};

export default CharacteristicButton;
