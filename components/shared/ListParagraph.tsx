import { ReactNode } from "react";
import { View, Text } from "react-native";

const ListParagraph = ({
  className,
  entries,
  emphasize = () => false,
  head,
}: {
  className?: string;
  entries: Array<string>;
  emphasize?: (entry: string, index: number, array: Array<string>) => boolean;
  head?: ReactNode;
}) => {
  return (
    <View className={"flex-row flex-wrap items-center " + className}>
      {head}
      {entries.map((entry, index, array) => {
        const isEmphasized = emphasize(entry, index, array);
        return (
          <Text
            key={index}
            className="text-white text-sm"
            style={isEmphasized && { fontWeight: "bold" }}
          >{`${entry}${index < array.length - 1 ? ", " : ""}`}</Text>
        );
      })}
    </View>
  );
};

export default ListParagraph;
