import { View, StyleSheet } from "react-native";
import { SuccessButton, FailButton, TaskImage, TaskText } from ".";

const Main = () => {
  return (
    <View style={styles.container}>
      <TaskImage />
      <TaskText />
      <View style={styles.buttons}>
        <SuccessButton />
        <FailButton />
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    marginTop: 40,
    alignItems: "center",
    gap: 10,
  },
});
