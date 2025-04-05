import React, { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";

const MenuEntry = ({
  containerClassName,
  bodyClassName,
  header,
  subtext,
  icon,
  onPress,
  children,
}: {
  containerClassName?: string;
  bodyClassName?: string;
  header?: string;
  subtext?: string;
  icon?: ReactNode;
  onPress?: () => void;
  children?: ReactNode;
}) => {
  return (
    <Pressable className={containerClassName} onPress={onPress}>
      <View className="flex-row items-baseline border-b border-muted">
        <Text className="flex-1 text-foreground font-bold text-xl">
          {header}
        </Text>
        <Text className="flex-1 text-muted text-center">{subtext}</Text>
        <View className="flex-1 items-end">{icon}</View>
      </View>
      <View className={bodyClassName}>{children}</View>
    </Pressable>
  );
};

export default MenuEntry;
