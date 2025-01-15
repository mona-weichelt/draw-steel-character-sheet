import Characteristics from "@/components/heroes/Characteristics";
import StaminaDisplay from "@/components/stamina/StaminaDisplay";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-red-600">
      <StaminaDisplay />
      <Link href="/sheet/(tabs)/skills">Go to sheet</Link>
    </View>
  );
}
