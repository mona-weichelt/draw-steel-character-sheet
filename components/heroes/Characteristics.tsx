import { View, Text } from "react-native";
import CharacteristicButton from "./CharacteristicButton";

const Characteristics = () => {
  return (
    <View className="flex flex-row justify-evenly gap-2">
      <CharacteristicButton characteristic="Might" value={2} />
      <CharacteristicButton characteristic="Agility" value={0} />
      <CharacteristicButton characteristic="Reason" value={2} />
      <CharacteristicButton characteristic="Intuition" value={-1} />
      <CharacteristicButton characteristic="Presence" value={1} />
    </View>
  );
};

export default Characteristics;
