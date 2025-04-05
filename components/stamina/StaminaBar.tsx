import { useHeroContext } from "@/hooks/useHeroContext";
import React, { ReactNode } from "react";
import { Text, View } from "react-native";

const Spacer = () => {
  return <View className="flex-1" />;
};

const ScaleMarker = ({
  children,
  alignment = "center",
  className,
  textClassName,
  ...rest
}: {
  children?: ReactNode;
  alignment?: "start" | "center" | "end";
  className?: string;
  textClassName?: string;
  [x: string]: unknown;
}) => {
  return (
    <View className={`w-0 items-${alignment} ${className}`} {...rest}>
      <Text className={"uppercase font-bold " + textClassName}>{children}</Text>
    </View>
  );
};

// An alternative scale for the stamina bar. Not used in the current design, but the code is functional.
/* const NumberScale = ({ className }: { className?: string }) => {
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
}; */

const SimpleScale = ({ className }: { className?: string }) => {
  const {
    state: { stamina },
  } = useHeroContext();

  const isDying = stamina.current <= 0;
  const isWinded = stamina.current <= stamina.winded;

  return (
    <View className={"flex flex-row h-fit " + className}>
      <ScaleMarker
        className="flex-1"
        textClassName={"text-xs " + (isDying ? "text-negative" : "text-muted")}
      >
        DYING
      </ScaleMarker>
      <ScaleMarker
        className="flex-1"
        textClassName={
          "text-xs " + (isWinded && !isDying ? "text-negative" : "text-muted")
        }
      >
        WINDED
      </ScaleMarker>
      <ScaleMarker
        className="flex-1"
        textClassName="text-foreground"
        alignment="end"
      >
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
      className={className}
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

  const staminaPercentage = Math.max(
    (stamina.current + stamina.winded) / (stamina.maximum + stamina.winded),
    0
  );
  const recoveryPercentage =
    stamina.recovery / (stamina.maximum + stamina.winded);
  const temporaryPercentage =
    stamina.temporary / (stamina.maximum + stamina.winded);
  //const isRecoveryVisible = staminaPercentage + recoveryPercentage < 1;

  return (
    <View className={"flex-row bg-muted h-1 " + className}>
      <View className="w-full flex-row overflow-hidden">
        <BarSegment width={staminaPercentage * 100} className="bg-stamina" />
        <BarSegment width={temporaryPercentage * 100} className="bg-resolve" />
      </View>
      <View className="absolute w-full h-full flex-row items-center">
        <View
          className="h-1 self-center"
          style={{
            width: `${(staminaPercentage + recoveryPercentage) * 100}%`,
            transitionProperty: "width",
            transitionDuration: "100ms",
          }}
        />
        <ScaleMarker
          className="w-[2px] bg-recovery h-2"
          textClassName="hidden"
        />
      </View>
      <View className="absolute flex-row w-full h-full items-center">
        <Spacer />
        <ScaleMarker
          className="w-[3px] bg-foreground h-2"
          textClassName="hidden"
        />
        <Spacer />
        <ScaleMarker
          className="w-[3px] bg-foreground h-2"
          textClassName="hidden"
        />
        <Spacer />
      </View>
    </View>
  );
};

const Header = () => {
  return (
    <View className="absolute -top-2 left-2 right-2 flex-row">
      <Text className="flex-1 text-foreground uppercase font-bold text-xs">
        Recoveries
      </Text>
      <Text className="flex-1 text-foreground uppercase font-bold text-xs text-right">
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
                  index < recoveries.current
                    ? "var(--recovery)"
                    : "var(--muted)",
              }}
            />
          );
        })}
      </View>
      <Text className="text-foreground font-bold">+{stamina.recovery}</Text>
    </View>
  );
};

const Stamina = ({ className }: { className?: string }) => {
  const {
    state: { stamina },
  } = useHeroContext();

  return (
    <View className={"flex-row gap-x-1 justify-end items-end " + className}>
      <Text className="font-bold text-right text-resolve">
        {stamina.temporary > 0 ? `(+${stamina.temporary})` : ""}
      </Text>
      <Text className="text-foreground font-bold text-right">
        {stamina.current}
      </Text>
    </View>
  );
};

const StaminaBar = ({ className }: { className?: string }) => {
  /*   const {
    state: { stamina },
  } = useHeroContext(); */

  // TODO: add highlight for winded and dying states to stamina bar
  // const isWinded = stamina.current <= stamina.winded;
  // const isDying = stamina.current >= 0;

  return (
    <View
      className={
        "p-2 pb-1 mt-2 border border-muted rounded-lg w-[202px] " + className
      }
    >
      <Header />
      <View className="flex-row mt-1 justify-between">
        <Recoveries />
        <View className="bg-muted w-[1px] mx-2" />
        <Stamina className="flex-1" />
      </View>
      <Bar className="mt-2" />
      <SimpleScale className="mt-2" />
    </View>
  );
};

export default StaminaBar;
