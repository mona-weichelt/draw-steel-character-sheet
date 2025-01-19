import { Characteristic, CharacteristicShorthand } from "@/types/core";
import { View, Text, Button, Pressable } from "react-native";

const CharacteristicButton = ({
  value,
  characteristic,
}: {
  value: number;
  characteristic: Characteristic;
}) => {
  return (
    <View className="flex-1 p-1 pt-1 border border-gray-500 rounded-lg bg-gray-700">
      <Text className="font-bold text-white text-xs text-center">
        {CharacteristicShorthand[characteristic]}
      </Text>
      <Pressable className="flex-1 p-2 pt-3 flex-row justify-center items-center border border-gray-500 bg-gray-800 rounded-lg">
        <Text className="font-bold text-2xl text-gray-500">
          {value < 0 ? "-" : "+"}
        </Text>
        <Text className="font-bold text-2xl text-white">{Math.abs(value)}</Text>
      </Pressable>
    </View>
  );
};

export default CharacteristicButton;
