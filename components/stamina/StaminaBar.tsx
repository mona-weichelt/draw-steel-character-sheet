import { useHeroContext } from "@/hooks/useHeroContext";
import { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";

const Spacer = () => {
  return <View className="flex-1" />;
};

const StaminaBar = ({ className }: { className?: string }) => {
  const {
    state: { stamina, recoveries },
    dispatch,
  } = useHeroContext();

  const percentage =
    (stamina.current + stamina.winded) / (stamina.maximum + stamina.winded);
  const isWinded = stamina.current <= stamina.winded;
  const isDying = stamina.current >= 0;
  const barWidth = percentage * 100;
  const recoveryPercentage =
    stamina.recovery / (stamina.maximum + stamina.winded);

  return (
    <View className={className + " p-2 m-2 border border-gray-500 rounded-lg"}>
      <View className="flex flex-row gap-2">
        <View className="flex-1 justify-end">
          <View className="flex flex-row justify-between w-full">
            <Text className="uppercase text-xs font-bold text-white mb-1">
              Recoveries
            </Text>
            <Text className="uppercase text-xs font-bold text-white">
              {recoveries.current}/{recoveries.maximum}
            </Text>
          </View>
          <View className="flex flex-row flex-wrap-reverse gap-1">
            {[...Array(recoveries.maximum)].map((_, index) => {
              return (
                <View
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor:
                      index < recoveries.current ? "#dc2626" : "#6b7280",
                  }}
                />
              );
            })}
          </View>
        </View>
        <View className="flex-1 justify-end">
          <Text className="uppercase text-xs absolute -top-4 w-full text-center font-bold text-white">
            Stamina
          </Text>
          <Text className="font-bold text-2xl text-center text-white">
            {stamina.current}
            {stamina.temporary > 0 ? ` (+${stamina.temporary})` : ""}
          </Text>
        </View>
      </View>
      <View className="mt-2">
        <View className="flex flex-row w-full bg-gray-600 h-4 border-2 border-gray-300 rounded-full overflow-hidden">
          <View
            className={"bg-red-700"}
            style={{
              width: `${barWidth}%`,
              transitionProperty: "width",
              transitionDuration: "100ms",
            }}
          />
          <View
            className="flex items-center border-r-2 border-r-green-500 opacity-50"
            style={{ width: `${recoveryPercentage * 100}%` }}
          >
            <Text className="text-center content-center hidden">
              {"+" + stamina.recovery}
            </Text>
          </View>
          <View className="absolute left-1/3 h-full border-r-2 border-gray-300" />
          <View className="absolute left-2/3 h-full border-r-2 border-gray-300" />
        </View>
      </View>
      <View className="flex flex-row h-4 mt-2">
        <View className="flex-1 flex flex-row">
          <Text className="text-white uppercase font-bold text-xs">
            -{stamina.winded}
          </Text>
          <Text className="text-white uppercase font-bold text-xs flex-1 text-right">
            Dying: 0
          </Text>
        </View>
        <View className="flex-1">
          <Text className="text-white uppercase font-bold text-xs w-full text-right">
            Winded: {stamina.winded}
          </Text>
        </View>
        <View className="flex-1">
          <Text className="text-white uppercase font-bold text-xs w-full text-right">
            Maximum: {stamina.maximum}
          </Text>
        </View>
      </View>
      <View className="hidden flex-row gap-2">
        <View className="flex-1">
          <Pressable
            className="h-12 items-center justify-center bg-red-600 rounded-lg"
            onPress={() =>
              dispatch({
                type: "Take Damage",
                payload: 65,
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
    </View>
  );
};

export default StaminaBar;
