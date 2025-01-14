import { useHeroContext } from "@/hooks/useHeroContext";
import { View, Text, Pressable } from "react-native";

const ValueLabel = ({ label, value }: { label: string; value: number }) => {
  return (
    <View className="flex flex-row justify-between gap-1">
      <Text className="text-xs">{label}</Text>
      <Text className="text-xs font-bold">{value}</Text>
    </View>
  );
};

const StaminaDisplay = () => {
  const { state, dispatch } = useHeroContext();

  return (
    <View className="flex flex-row bg-white rounded-lg w-fit overflow-hidden">
      <View className="flex justify-evenly gap-2">
        <ValueLabel label="Winded" value={state.stamina.winded} />
        <ValueLabel label="Recovery" value={state.stamina.recovery} />
      </View>
      <View className="flex justify-center px-2">
        <Text className="flex flex-1 justify-center items-center text-xl font-bold">
          {state.stamina.current + "/" + state.stamina.maximum}
        </Text>
      </View>
      <Pressable
        className="flex bg-green-500 px-2"
        onPress={() => {
          if (state.recoveries.current < 1) return;
          dispatch({
            type: "Use Recovery",
          });
        }}
      >
        <ValueLabel label="Max" value={state.recoveries.maximum} />
        <Text className="flex flex-1 justify-center items-center text-xl font-bold">
          {state.recoveries.current}
        </Text>
      </Pressable>
    </View>
  );
};

export default StaminaDisplay;
