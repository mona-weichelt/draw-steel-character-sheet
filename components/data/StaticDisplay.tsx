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
    "uppercase font-bold text-foreground text-xs absolute rounded-lg min-w-20 w-full text-center";
  return (
    <Pressable
      className={"flex-row items-center " + className}
      onPress={onPress}
    >
      <View className="flex justify-center items-center w-[72px] h-12 border border-muted rounded-lg">
        {labelTop && <Text className={textStyle + " -top-2"}>{labelTop}</Text>}
        <Text className="uppercase w-full text-center font-bold text-foreground text-2xl rounded-lg">
          {value}
        </Text>
        {labelBottom && (
          <Text className={textStyle + " -bottom-2"}>{labelBottom}</Text>
        )}
      </View>
      {labelRight && (
        <View className="flex-1 border border-l-0 border-muted rounded-r-lg p-1 pr-2">
          <Text className={"text-wrap"}>{labelRight}</Text>
        </View>
      )}
    </Pressable>
  );
};

export default StaticDisplay;
