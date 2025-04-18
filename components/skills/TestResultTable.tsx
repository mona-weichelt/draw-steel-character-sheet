import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { ReactNode } from "react";
import { Text, View } from "react-native";

const Reward = () => {
  return <Entypo name="arrow-up" size={24} color="var(--positive)" />;
};

const Consequence = () => {
  return <Entypo name="arrow-down" size={24} color="var(--negative)" />;
};

const Success = () => {
  return <Text className="text-foreground">Success</Text>;
};

const Failure = () => {
  return <Text className="text-foreground">Failure</Text>;
};

const Column = ({
  header,
  values,
  className,
}: {
  header: string;
  values: ReactNode[];
  className?: string;
}) => {
  return (
    <View className={"flex " + className}>
      <Text className="h-12 pl-2 text-foreground align-middle content-center font-bold">
        {header}
      </Text>
      {values.map((element, index) => {
        return (
          <View
            key={index}
            className={
              "flex-row items-center pl-2 h-12 " +
              (index % 2 === 1 ? "bg-background" : "")
            }
          >
            {element}
          </View>
        );
      })}
    </View>
  );
};

const TestResultTable = ({ className }: { className?: string }) => {
  return (
    <View className={"gap-2 " + className}>
      <View className="flex-row border-b border-background">
        <Column
          className="flex-1 border-r border-background"
          header="Result"
          values={[
            <Text key={"tier1"} className="font-bold text-foreground">
              Tier 1
            </Text>,
            <Text key={"tier2"} className="font-bold text-foreground">
              Tier 2
            </Text>,
            <Text key={"tier3"} className="font-bold text-foreground">
              Tier 3
            </Text>,
          ]}
        />
        <Column
          className="flex-1"
          header="Easy"
          values={[
            <>
              <Success key={"easy-tier1-1"} />
              <Consequence key={"easy-tier1-2"} />
            </>,
            <Success key={"easy-tier2-1"} />,
            <>
              <Success key={"easy-tier3-1"} />
              <Reward key={"easy-tier3-2"} />
            </>,
          ]}
        />
        <Column
          className="flex-1"
          header="Medium"
          values={[
            <Failure key={"medium-tier1-1"} />,
            <>
              <Success key={"medium-tier2-1"} />
              <Consequence key={"medium-tier2-2"} />
            </>,
            <Success key={"medium-tier3-1"} />,
          ]}
        />
        <Column
          className="flex-1"
          header="Hard"
          values={[
            <>
              <Failure key={"hard-tier1-1"} />
              <Consequence key={"hard-tier1-2"} />
            </>,
            <Failure key={"hard-tier2-1"} />,
            <Success key={"hard-tier3-1"} />,
          ]}
        />
      </View>
      <View className="flex-row justify-evenly">
        <View className="flex-row items-center">
          <Reward />
          <Text className="text-foreground">- with reward</Text>
        </View>
        <View className="flex-row items-center">
          <Consequence />
          <Text className="text-foreground">- with consequence</Text>
        </View>
      </View>
    </View>
  );
};

export default TestResultTable;
