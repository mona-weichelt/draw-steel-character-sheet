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
    "uppercase text-white font-bold text-xs absolute rounded-lg min-w-20 w-full text-center";
  return (
    <Pressable
      className={
        "flex justify-center items-center w-[72px] h-12 border border-gray-500 bg-gray-700 rounded-lg mb-2 " +
        className
      }
      onPress={onPress}
    >
      {labelTop && <Text className={textStyle + " -top-2"}>{labelTop}</Text>}
      <Text className="uppercase text-white w-full text-center font-bold text-2xl rounded-lg">
        {value}
      </Text>
      {labelBottom && (
        <Text className={textStyle + " -bottom-2"}>{labelBottom}</Text>
      )}
    </Pressable>
  );
};

export default StaticDisplay;
