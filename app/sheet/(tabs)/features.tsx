import { useHeroContext } from "@/hooks/useHeroContext";
import { View, Text } from "react-native";

export default function HeroFeatures() {
  const { state, dispatch } = useHeroContext();
  return (
    <View>
      <Text>Class Features</Text>
      <Text>Ancestry Features</Text>
      <Text>Perks</Text>
      <Text>Titles</Text>
      <Text>Complications</Text>
      <Text>Treasures</Text>
    </View>
  );
}
