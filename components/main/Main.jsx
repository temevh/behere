import { View, StyleSheet } from "react-native";
import { SuccessButton, FailButton, TaskImage, TaskText } from ".";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

const Main = () => {
  const router = useRouter();
  const { completed } = useLocalSearchParams();
  const [isDone, setIsDone] = useState(0);

  const successPressed = () => {
    router.push("/success");
  };

  useEffect(() => {
    setIsDone(completed);
    console.log("completed:", completed);
  }, [completed]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDone ? "darkgreen" : "black" },
      ]}
    >
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
