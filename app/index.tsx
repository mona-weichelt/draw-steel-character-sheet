import Characteristics from "@/components/heroes/Characteristics";
import StaminaDisplay from "@/components/stamina/StaminaDisplay";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-red-600">
      <StaminaDisplay />
    </View>
  );
}
