import Characteristics from "@/components/heroes/Characteristics";
import { SkillDisplay } from "@/components/skills/SkillDisplay";
import { View, Text } from "react-native";

export default function HeroSkills() {
  return (
    <View className="flex-1 bg-gray-800 gap-8">
      <Characteristics />
      <SkillDisplay className="p-2" />
      <Text>Wealth</Text>
      <Text>Renown</Text>
      <Text>Languages</Text>
    </View>
  );
}
