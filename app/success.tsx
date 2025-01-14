import { View, StyleSheet, Text } from "react-native";

export default function SuccessScreen() {
  return (
    <View>
      <Text style={styles.text}>Success view</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    color: "white",
  },
});
