import { Pressable, Text } from "react-native";
import { stylesCountScreen } from "./CountScreen.style";

type CountScreenProps = {
  label: string;
  onPress: () => void;
};

export const CountScreen: React.FC<CountScreenProps> = ({ label, onPress }) => {
  return (
    <Pressable style={stylesCountScreen.button} onPress={onPress}>
      <Text style={stylesCountScreen.labelText}>
        {label}
      </Text>
    </Pressable>
  );
};