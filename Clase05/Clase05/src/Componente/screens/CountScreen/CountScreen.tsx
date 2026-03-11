import { Pressable, Text, View } from "react-native";

type countScreenProps = {
  label: string;
  OnPress: () => void;
}

export const CountScreen: React.FC<countScreenProps> = (
  { label, OnPress }
) => {
  return (
    <Pressable onPress={OnPress}>
      <Text>
        {label}
      </Text>
    </Pressable>
  );
};