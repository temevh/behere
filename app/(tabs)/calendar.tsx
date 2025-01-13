import { View, Text, StyleSheet } from "react-native";

export default function CalendarScreen() {
  return (
    <View>
      <Text style={styles.text}> Calendar view</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    color: "white",
  },
});
