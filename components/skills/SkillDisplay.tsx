import { useHeroContext } from "@/hooks/useHeroContext";
import { View, Text, Pressable } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { Hero, SkillGroup } from "@/types/hero";
import { getAllSkills } from "@/data/skills";
import { ReactNode, useState } from "react";

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
    <View className={"flex-row flex-wrap " + className}>
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

const SkillParagraph = ({
  className,
  headline,
  skills,
}: {
  className?: string;
  headline?: string;
  skills: Array<string>;
}) => {
  const {
    state: { tests },
  } = useHeroContext();

  if (skills.length === 0) return null;

  return (
    <View className={className}>
      {headline && (
        <Text className="text-white font-bold capitalize">{headline}</Text>
      )}
      <ListParagraph
        entries={skills}
        emphasize={(entry) => {
          return tests.edge.has(entry) || tests.doubleEdge.has(entry);
        }}
      />
    </View>
  );
};

const SimpleBody = () => {
  const {
    state: { skills },
  } = useHeroContext();
  return <SkillParagraph skills={[...getAllSkills(skills)].sort()} />;
};

const VerboseBody = () => {
  const {
    state: { skills },
  } = useHeroContext();

  return (
    <>
      <SkillParagraph skills={[...skills.crafting]} headline="crafting" />
      <SkillParagraph skills={[...skills.exploration]} headline="exploration" />
      <SkillParagraph
        skills={[...skills.interpersonal]}
        headline="interpersonal"
      />
      <SkillParagraph skills={[...skills.intrigue]} headline="intrigue" />
      <SkillParagraph skills={[...skills.lore]} headline="lore" />
    </>
  );
};

export const SkillDisplay = ({ className }: { className?: string }) => {
  const {
    state: { skills, tests },
  } = useHeroContext();

  const [isVerbose, setIsVerbose] = useState(false);

  return (
    <View className={className}>
      <Pressable
        className="flex-row items-baseline border-b border-gray-500"
        onPress={() => setIsVerbose((isVerbose) => !isVerbose)}
      >
        <Text className="flex-1 text-white font-bold text-xl">Skills</Text>
        <Text className="flex-1 text-gray-500 text-center">+2 to tests</Text>
        <Entypo
          className="flex-1 text-right"
          name="plus"
          size={24}
          color="white"
        />
      </Pressable>
      <View className="gap-2 mt-2">
        {isVerbose ? <VerboseBody /> : <SimpleBody />}
        {tests.edge.size > 0 && (
          <ListParagraph
            entries={[...tests.edge].sort()}
            head={<Text className="text-white font-bold">Edge: </Text>}
          />
        )}
        {tests.doubleEdge.size > 0 && (
          <ListParagraph
            entries={[...tests.doubleEdge].sort()}
            head={<Text className="text-white font-bold">Double Edge: </Text>}
          />
        )}
        {tests.bane.size > 0 && (
          <ListParagraph
            entries={[...tests.bane].sort()}
            head={<Text className="text-white font-bold">Bane: </Text>}
          />
        )}
        {tests.doubleBane.size > 0 && (
          <ListParagraph
            entries={[...tests.doubleBane].sort()}
            head={<Text className="text-white font-bold">Double Bane: </Text>}
          />
        )}
      </View>
    </View>
  );
};
