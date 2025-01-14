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
    <View className="flex justify-center items-center max-w-16 overflow-hidden">
      <Text className="font-bold">
        {CharacteristicShorthand[characteristic]}
      </Text>
      <Pressable className="flex justify-center items-center h-12 w-12 border-2 rounded-lg">
        <Text>{value}</Text>
      </Pressable>
    </View>
  );
};

export default CharacteristicButton;
