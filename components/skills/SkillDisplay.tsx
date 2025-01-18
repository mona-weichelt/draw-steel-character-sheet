import { useHeroContext } from "@/hooks/useHeroContext";
import { View, Text } from "react-native";
import { getAllSkills } from "@/data/skills";
import { useState } from "react";
import MenuEntry from "../shared/MenuEntry";
import ListParagraph from "../shared/ListParagraph";

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

const SkillDisplay = ({ className }: { className?: string }) => {
  const {
    state: { tests },
  } = useHeroContext();

  const [isVerbose, setIsVerbose] = useState(false);

  return (
    <>
      <MenuEntry
        containerClassName={className}
        bodyClassName="gap-2 mt-2"
        header="Skills"
        subtext="+2 to tests"
        onPress={() => setIsVerbose((isVerbose) => !isVerbose)}
      >
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
      </MenuEntry>
    </>
  );
};

export default SkillDisplay;
