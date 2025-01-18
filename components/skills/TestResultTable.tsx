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
      <Text className=" flex-1 pl-2 text-white align-middle bg-gray-700 font-bold">
        {header}
      </Text>
      {values.map((element, index) => {
        return (
          <View
            className={
              "text-white flex-1 flex-row items-center pl-2 " +
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
    <>
      <View className="flex-row h-60">
        <Column
          className="flex-1 border-r border-gray-600"
          header="Result"
          values={[
            <Text className="text-white font-bold">Tier 1</Text>,
            <Text className="text-white font-bold">Tier 2</Text>,
            <Text className="text-white font-bold">Tier 3</Text>,
            <Text className="text-white font-bold">Crit</Text>,
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
            <>
              <Success />
              <Reward />
            </>,
            ,
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
            <>
              <Success />
              <Reward />
            </>,
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
            <>
              <Success />
              <Reward />
            </>,
          ]}
        />
      </View>
    </>
  );
};

export default TestResultTable;
