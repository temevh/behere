import { View, StyleSheet } from "react-native";
import { SuccessButton, FailButton, TaskImage, TaskText } from "../main";

const MainTask = () => {
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

export default MainTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    marginTop: 10,
    alignItems: "center",
    gap: 10,
  },
});
