import { useHeroContext } from "@/hooks/useHeroContext";
import { View, Text, Pressable } from "react-native";
import StaticDisplay from "../data/StaticDisplay";

const Recovery = ({ isSpent }: { isSpent: boolean }) => {
  const active = "bg-red-600";
  const spent = "bg-gray-600";
  const shared = " w-2 h-3 rounded-full";
  const style = (isSpent ? spent : active) + shared;
  return <View className={style} />;
};

const RecoveryArray = () => {
  return (
    <View className="flex flex-row flex-wrap gap-1 justify-start">
      {[...Array(20)].map((_element, index) => {
        return (
          <Recovery
            key={index}
            isSpent={true /*index >= recoveries.current*/}
          />
        );
      })}
    </View>
  );
};

const StaminaDisplay = () => {
  const {
    state: { stamina, recoveries },
    dispatch,
  } = useHeroContext();

  return (
    <View className="flex flex-row rounded-lg m-2 h-20 border border-gray-400">
      <StaticDisplay
        className="h-full w-40 m-0 border-0 rounded-l-none"
        value={
          <View className="flex flex-row">
            <Text className="flex-1 font-bold text-2xl text-right">
              {stamina.current}
            </Text>
            <Text className="font-bold text-2xl">/</Text>
            <Text className="flex-1 font-bold text-2xl">{stamina.maximum}</Text>
          </View>
        }
        labelTop="stamina"
        labelBottom={"Winded: " + stamina.winded}
      />
      <StaticDisplay
        className="bg-green-500 h-full w-40 m-0 border-0 rounded-l-none"
        onPress={() => {
          if (recoveries.current < 1) return;
          dispatch({
            type: "Use Recovery",
          });
        }}
        value={stamina.recovery.toString()}
        labelTop="use recovery"
        labelBottom={
          "Recoveries: " + recoveries.current + "/" + recoveries.maximum
        }
      />
    </View>
  );
};

export default StaminaDisplay;
