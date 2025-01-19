import { testResults } from "@/data/tests";
import { View, Text } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ReactNode } from "react";

const Reward = () => {
  return <Entypo name="arrow-up" size={24} color="limegreen" />;
};

const Consequence = () => {
  return <Entypo name="arrow-down" size={24} color="red" />;
};

const Success = () => {
  return <Text className="text-white">Success</Text>;
};

const Failure = () => {
  return <Text className="text-white">Failure</Text>;
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
      <Text className="h-12 pl-2 text-white align-middle content-center bg-gray-700 font-bold">
        {header}
      </Text>
      {values.map((element, index) => {
        return (
          <View
            key={index}
            className={
              "text-white flex-row items-center pl-2 h-12 " +
              (index % 2 === 1 ? "bg-gray-700" : "")
            }
          >
            {element}
          </View>
        );
      })}
    </View>
  );
};

const TestResultTable = () => {
  return (
    <View className="gap-2">
      <View className="flex-row border-b border-gray-700">
        <Column
          className="flex-1 border-r border-gray-700"
          header="Result"
          values={[
            <Text className="text-white font-bold">Tier 1</Text>,
            <Text className="text-white font-bold">Tier 2</Text>,
            <Text className="text-white font-bold">Tier 3</Text>,
          ]}
        />
        <Column
          className="flex-1"
          header="Easy"
          values={[
            <>
              <Success />
              <Consequence />
            </>,
            <Success />,
            <>
              <Success />
              <Reward />
            </>,
          ]}
        />
        <Column
          className="flex-1"
          header="Medium"
          values={[
            <Failure />,
            <>
              <Success />
              <Consequence />
            </>,
            <Success />,
          ]}
        />
        <Column
          className="flex-1"
          header="Hard"
          values={[
            <>
              <Failure />
              <Consequence />
            </>,
            <Failure />,
            <Success />,
          ]}
        />
      </View>
      <View className="flex-row justify-evenly">
        <View className="flex-row items-center">
          <Reward />
          <Text className="text-white">- with reward</Text>
        </View>
        <View className="flex-row items-center">
          <Consequence />
          <Text className="text-white">- with consequence</Text>
        </View>
      </View>
    </View>
  );
};

export default TestResultTable;
