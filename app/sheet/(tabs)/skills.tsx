import StaticDisplay from "@/components/data/StaticDisplay";
import CharacteristicButton from "@/components/heroes/CharacteristicButton";
import ListParagraph from "@/components/shared/ListParagraph";
import MenuEntry from "@/components/shared/MenuEntry";
import SkillDisplay from "@/components/skills/SkillDisplay";
import TestResultTable from "@/components/skills/TestResultTable";
import { useHeroContext } from "@/hooks/useHeroContext";
import { Characteristic } from "@/types/core";
import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function HeroSkills() {
  const {
    state: { wealth, renown, languages, characteristics },
  } = useHeroContext();

  const wealthLabel =
    "Mundane clothing, gear, armor, implements, and weapons; meals or drinks at a common tavern; stay at a common inn; passage on a boat";

  return (
    <ScrollView contentContainerClassName="flex flex-col px-2 py-4 gap-6">
      <View className="flex flex-row justify-evenly gap-2">
        {Object.entries(characteristics).map((element) => {
          return (
            <CharacteristicButton
              key={element[0]}
              characteristic={element[0] as Characteristic}
              value={element[1]}
            />
          );
        })}
      </View>
      <SkillDisplay />
      <TestResultTable />
      <MenuEntry header="Influence" bodyClassName="pt-4 gap-4">
        <View className="flex-row items-start gap-2">
          <StaticDisplay value={wealth} labelBottom="wealth" />
          <Text className="flex-1 text-foreground">{wealthLabel}</Text>
        </View>
        <View className="h-[1px] border-t border-muted w-1/4 self-center border-dotted" />
        <View className="flex-row items-start gap-2">
          <StaticDisplay value={renown} labelBottom="renown" />
          <Text className="flex-1 text-foreground">
            Watch captain in a large city, high priest, viscount
          </Text>
        </View>
      </MenuEntry>
      <MenuEntry header="Languages" bodyClassName="mt-2" subtext="+1 patience">
        <ListParagraph entries={[...languages].sort()}></ListParagraph>
      </MenuEntry>
      <View className="h-80" />
    </ScrollView>
  );
}
