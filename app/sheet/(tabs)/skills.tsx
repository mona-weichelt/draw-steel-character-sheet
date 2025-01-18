import Characteristics from "@/components/heroes/Characteristics";
import LanguageDisplay from "@/components/skills/LanguageDisplay";
import SkillDisplay from "@/components/skills/SkillDisplay";
import TestResultTable from "@/components/skills/TestResultTable";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function HeroSkills() {
  return (
    <ScrollView
      className="flex flex-1 p-2 bg-gray-800"
      contentContainerClassName="gap-8"
    >
      <Characteristics />
      <SkillDisplay />
      <TestResultTable />
      <LanguageDisplay />
      <Text>Wealth</Text>
      <Text>Renown</Text>
      <Text>Wealth</Text>
      <Text>Renown</Text>
    </ScrollView>
  );
}
