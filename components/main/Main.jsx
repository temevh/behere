import { View, StyleSheet } from "react-native";
import { SuccessButton, TaskImage, TaskText } from ".";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native-paper";

const Main = () => {
  const router = useRouter();
  const [isDone, setIsDone] = useState(0);

  const successPressed = () => {
    router.push("/success");
  };

  useEffect(() => {
    const checkAsync = async () => {
      try {
        const hard = await AsyncStorage.getItem("hard");
        const fun = await AsyncStorage.getItem("fun");
        const again = await AsyncStorage.getItem("again");
        const completed = await AsyncStorage.getItem("completed");
        if (hard !== null) {
          console.log("hard in main: ", JSON.parse(hard));
        }
        if (fun !== null) {
          console.log("fun in main: ", JSON.parse(fun));
        }
        if (again !== null) {
          console.log("again in main: ", JSON.parse(again));
        }
        if (completed !== null) {
          setIsDone(true);
          console.log("completed in main: ", JSON.parse(completed));
        }
      } catch (e) {
        console.log(e);
      }
    };
    checkAsync();
  }, []);

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
