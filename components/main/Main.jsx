import { View, StyleSheet } from "react-native";
import { SuccessButton, TaskImage, TaskText } from ".";
import { useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native-paper";

const Main = () => {
  const router = useRouter();
  const [isDone, setIsDone] = useState(0);

  const successPressed = () => {
    router.push("/success");
  };

  useFocusEffect(
    useCallback(() => {
      const checkAsync = async () => {
        try {
          const completed = await AsyncStorage.getItem("completed");
          if (completed !== null && JSON.parse(completed) === true) {
            setIsDone(true);
            console.log("completed in main: ", completed);
          }
        } catch (e) {
          console.log(e);
        }
      };
      checkAsync();
    }, [])
  );

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDone ? "darkgreen" : "black" },
      ]}
    >
      <TaskImage />
      <TaskText />
      <Button>Async</Button>
      {!isDone && (
        <View style={styles.buttons}>
          <SuccessButton successPressed={successPressed} />
          {/*<FailButton failPressed={failPressed} />*/}
        </View>
      )}
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttons: {
    marginTop: 20,
    alignItems: "center",
    gap: 10,
  },
});
