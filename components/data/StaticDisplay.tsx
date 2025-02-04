import React, { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";

const StaticDisplay = ({
  value,
  labelTop,
  labelBottom,
  labelRight,
  className,
  onPress,
}: {
  value: string | ReactNode;
  labelTop?: string | ReactNode;
  labelBottom?: string | ReactNode;
  labelRight?: string | ReactNode;
  className?: string;
  onPress?: () => void;
}) => {
  const textStyle: string =
    "uppercase text-white font-bold text-xs absolute rounded-lg min-w-20 w-full text-center";
  return (
    <Pressable
      className={"flex-row items-center " + className}
      onPress={onPress}
    >
      <View className="flex justify-center items-center w-[72px] h-12 border border-gray-500 bg-gray-700 rounded-lg">
        {labelTop && <Text className={textStyle + " -top-2"}>{labelTop}</Text>}
        <Text className="uppercase text-white w-full text-center font-bold text-2xl rounded-lg">
          {value}
        </Text>
        {labelBottom && (
          <Text className={textStyle + " -bottom-2"}>{labelBottom}</Text>
        )}
      </View>
      {labelRight && (
        <View className="flex-1 bg-gray-700 border border-l-0 border-gray-500 rounded-r-lg p-1 pr-2">
          <Text className={"text-white text-wrap"}>{labelRight}</Text>
        </View>
      )}
    </Pressable>
  );
};

export default StaticDisplay;
