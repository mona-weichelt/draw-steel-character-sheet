import StaticDisplay from "@/components/data/StaticDisplay";
import Characteristics from "@/components/heroes/Characteristics";
import MenuEntry from "@/components/shared/MenuEntry";
import LanguageDisplay from "@/components/skills/LanguageDisplay";
import SkillDisplay from "@/components/skills/SkillDisplay";
import TestResultTable from "@/components/skills/TestResultTable";
import { useHeroContext } from "@/hooks/useHeroContext";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function HeroSkills() {
  const {
    state: { wealth, renown },
  } = useHeroContext();

  return (
    <ScrollView
      className="flex flex-1 px-2 py-4 bg-gray-800"
      contentContainerClassName="gap-8"
    >
      <Characteristics />
      <SkillDisplay />
      <TestResultTable />
      <MenuEntry header="Influence" bodyClassName="pt-4">
        <View className="flex-row justify-evenly">
          <StaticDisplay value={wealth} labelBottom="wealth" />
          <StaticDisplay value={renown} labelBottom="renown" />
        </View>
      </MenuEntry>
      <LanguageDisplay />
      <View className="h-80" />
    </ScrollView>
  );
}
