import { ReactNode } from "react";
import { Text, Pressable } from "react-native";

const StaticDisplay = ({
  value,
  labelTop,
  labelBottom,
  className,
  onPress,
}: {
  value: string | ReactNode;
  labelTop?: string | ReactNode;
  labelBottom?: string | ReactNode;
  className?: string;
  onPress?: () => void;
}) => {
  const textStyle: string =
    "uppercase font-bold text-xs absolute rounded-lg min-w-20 w-full text-center";
  return (
    <Pressable
      className={
        "flex justify-center items-center w-20 h-12 border border-gray-400 rounded-lg m-2 " +
        className
      }
      onPress={onPress}
    >
      {labelTop && <Text className={textStyle + " -top-2"}>{labelTop}</Text>}
      <Text className="uppercase w-full text-center font-bold text-2xl rounded-lg">
        {value}
      </Text>
      {labelBottom && (
        <Text className={textStyle + " -bottom-2"}>{labelBottom}</Text>
      )}
    </Pressable>
  );
};

export default StaticDisplay;