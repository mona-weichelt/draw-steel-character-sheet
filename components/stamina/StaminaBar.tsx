import { useHeroContext } from "@/hooks/useHeroContext";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";

const Spacer = () => {
  return <View className="flex-1" />;
};

const StaminaBar = () => {
  const {
    state: { stamina },
  } = useHeroContext();

  const percentage =
    (stamina.current + stamina.winded) / (stamina.maximum + stamina.winded);
  const isWinded = stamina.current <= stamina.winded;
  const isDying = stamina.current >= 0;
  const barWidth = percentage * 100;

  return (
    <View className="w-full p-4 pb-0 bg-blue-300">
      <View className="flex flex-row">
        <Text className="font-bold">
          Stamina: {stamina.current} (+{stamina.temporary})
        </Text>
      </View>
      <View className="">
        {/*<View className="absolute left-1/3 right-0 -top-6 bg-yellow-300 h-8 rounded-t-full overflow-hidden">
          <Text className="text-center h-6 bg-purple-500 align-middle">
            Temporary Stamina: {stamina.temporary}
          </Text>
        </View>*/}
        <View className="flex flex-row w-full bg-gray-300 h-4 border rounded-full overflow-hidden">
          <View className={"bg-red-800"} style={{ width: `${barWidth}%` }} />
          <View className="w-20 hidden bg-green-800 flex items-center">
            <Text className="text-center content-center">
              {"+" + stamina.recovery}
            </Text>
          </View>
          <View className="flex-0 bg-gray-500" />
          <View className="absolute left-1/3 h-full border-r" />
          <View className="absolute left-2/3 h-full border-r" />
        </View>
      </View>
      <View className="flex flex-row h-6">
        <View className="w-0">
          <Text className="absolute">{"-" + stamina.winded}</Text>
        </View>
        <View className="flex-1 flex justify-start items-center">
          <Text className="uppercase w-full text-center">Dying</Text>
        </View>
        <View className="w-0 items-center">
          <Text className="absolute">{"0"}</Text>
        </View>
        <View className="flex-1 flex justify-start items-center">
          <Text className="uppercase w-full text-center">Winded</Text>
        </View>
        <View className="w-0 items-center">
          <Text className="absolute">{stamina.winded}</Text>
        </View>
        <Spacer />
        <View className="w-0 items-end">
          <Text className="absolute">{stamina.maximum}</Text>
        </View>
      </View>
    </View>
  );
};

export default StaminaBar;
