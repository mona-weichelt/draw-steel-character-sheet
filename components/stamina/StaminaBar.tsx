import { useHeroContext } from "@/hooks/useHeroContext";
import { ReactNode, useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";

const Spacer = () => {
  return <View className="flex-1" />;
};

const ScaleMarker = ({
  children,
  alignment = "center",
  className,
  textClassName,
}: {
  children: ReactNode;
  alignment?: "start" | "center" | "end";
  className?: string;
  textClassName?: string;
}) => {
  return (
    <View className={`w-0 items-${alignment} ${className}`}>
      <Text className={"text-white uppercase font-bold " + textClassName}>
        {children}
      </Text>
    </View>
  );
};

const NumberScale = ({ className }: { className?: string }) => {
  const {
    state: { stamina },
  } = useHeroContext();

  return (
    <View className={"flex flex-row h-fit " + className}>
      <ScaleMarker alignment="start">-{stamina.winded}</ScaleMarker>
      <Spacer />
      <ScaleMarker>0</ScaleMarker>
      <Spacer />
      <ScaleMarker>{stamina.winded}</ScaleMarker>
      <Spacer />
      <ScaleMarker alignment="end">{stamina.maximum}</ScaleMarker>
    </View>
  );
};

const SimpleScale = ({ className }: { className?: string }) => {
  const {
    state: { stamina },
  } = useHeroContext();

  return (
    <View className={"flex flex-row h-fit " + className}>
      <ScaleMarker className="flex-1" textClassName="text-xs">
        DYING
      </ScaleMarker>
      <ScaleMarker className="flex-1" textClassName="text-xs">
        WINDED
      </ScaleMarker>
      <ScaleMarker className="flex-1" alignment="end">
        {stamina.maximum}
      </ScaleMarker>
    </View>
  );
};

const BarSegment = ({
  className,
  width,
}: {
  className?: string;
  width: number;
}) => {
  return (
    <View
      className={"bg-blue-400 " + className}
      style={{
        width: `${width}%`,
        transitionProperty: "width",
        transitionDuration: "100ms",
      }}
    />
  );
};

const Bar = ({ className }: { className?: string }) => {
  const {
    state: { stamina },
  } = useHeroContext();

  const staminaPercentage =
    (stamina.current + stamina.winded) / (stamina.maximum + stamina.winded);
  const staminaWidth = staminaPercentage * 100;
  const recoveryPercentage =
    stamina.recovery / (stamina.maximum + stamina.winded);
  const temporaryPercentage =
    stamina.temporary / (stamina.maximum + stamina.winded);

  return (
    <View
      className={"flex flex-row bg-gray-600 h-1 overflow-hidden " + className}
    >
      <BarSegment width={staminaWidth} />
      <BarSegment width={temporaryPercentage * 100} className="bg-teal-400" />
      <View className="absolute left-1/3 h-full border-r-2 border-white" />
      <View className="absolute left-2/3 h-full border-r-2 border-white" />
      <View
        className="flex absolute h-full border-r-2 border-r-red-600 bg-transparent"
        style={{
          width: `${recoveryPercentage * 100}%`,
          left: `${staminaWidth}%`,
        }}
      />
    </View>
  );
};

const Header = () => {
  return (
    <View className="absolute -top-2 left-2 right-2 flex-row">
      <Text className="flex-1 uppercase font-bold text-xs text-white">
        Recoveries
      </Text>
      <Text className="flex-1 uppercase font-bold text-xs text-white text-right">
        Stamina
      </Text>
    </View>
  );
};

const Recoveries = ({ className }: { className?: string }) => {
  const {
    state: { stamina, recoveries },
  } = useHeroContext();

  return (
    <View className={"flex-row gap-x-2 items-end " + className}>
      <View className="w-[58px] h-[18px] flex-row flex-wrap-reverse gap-[2px]">
        {[...Array(recoveries.maximum)].map((_, index) => {
          return (
            <View
              key={index}
              className="w-[4px] h-[8px]"
              style={{
                backgroundColor:
                  index < recoveries.current ? "#dc2626" : "#6b7280",
              }}
            />
          );
        })}
      </View>
      <Text className="font-bold text-white min-w-[32px]">
        +{stamina.recovery}
      </Text>
    </View>
  );
};

const Stamina = ({ className }: { className?: string }) => {
  const {
    state: { stamina },
  } = useHeroContext();

  return (
    <View className={"flex-row gap-x-1 justify-end items-end " + className}>
      <Text className="font-bold text-right text-teal-400">
        {stamina.temporary > 0 ? `(+${stamina.temporary})` : ""}
      </Text>
      <Text className="font-bold text-right text-white">{stamina.current}</Text>
    </View>
  );
};

const StaminaBar = ({ className }: { className?: string }) => {
  const {
    state: { stamina, recoveries },
    dispatch,
  } = useHeroContext();

  const isWinded = stamina.current <= stamina.winded;
  const isDying = stamina.current >= 0;

  return (
    <View
      className={
        "p-2 mt-2 border border-gray-500 rounded-lg min-w-[202px] " + className
      }
    >
      <Header />
      <View className="flex-row mt-1 justify-between">
        <Recoveries />
        <View className="bg-gray-500 w-[1px] mx-2" />
        <Stamina className="flex-1" />
      </View>
      <Bar className="mt-1" />
      <SimpleScale className="mt-1" />
    </View>
  );
};

export default StaminaBar;
