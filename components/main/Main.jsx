import { View, StyleSheet, Pressable, Button, Text } from "react-native";
import { SuccessButton, FailButton, TaskImage, TaskText } from ".";
import { useRouter } from "expo-router";

const Main = () => {
  const router = useRouter();

  const successPressed = () => {
    router.push("/success");
  };

  return (
    <View style={styles.container}>
      <TaskImage />
      <TaskText />
      <View style={styles.buttons}>
        <SuccessButton successPressed={successPressed} />
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
