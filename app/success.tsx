import { View, StyleSheet, Text } from "react-native";
import {
  SliderInput,
  CheckboxInput,
  SaveSuccessButton,
} from "../components/success/";
import { useState } from "react";
import { useRouter } from "expo-router";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SuccessScreen() {
  const router = useRouter();

  const [hard, setHard] = useState(1);
  const [fun, setFun] = useState(1);
  const [again, setAgain] = useState(false);

  const savePressed = async () => {
    try {
      await AsyncStorage.setItem("hard", JSON.stringify(hard));
      await AsyncStorage.setItem("fun", JSON.stringify(fun));
      await AsyncStorage.setItem("again", JSON.stringify(again));
      await AsyncStorage.setItem("completed", JSON.stringify(true));
    } catch (e) {
      console.log(e);
    }
    router.push({
      pathname: "/",
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Good job!</Text>
      <View style={styles.centerContent}>
        <SliderInput
          title={"How hard was the task?"}
          updateSliderValue={setHard}
        />
        <SliderInput
          title={"How much did you enjoy the task?"}
          updateSliderValue={setFun}
        />
        <CheckboxInput
          title={"Would you like a similar task again?"}
          updateCheckboxValue={setAgain}
        />
      </View>
      <View style={styles.saveButton}>
        <SaveSuccessButton savePressed={savePressed} isDisabled={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    color: "white",
    fontFamily: "RobotoMono",
    marginTop: 50,
    textAlign: "center",
  },
  container: {
    backgroundColor: "darkgreen",
    flex: 1,
    paddingHorizontal: 20,
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  saveButton: {
    marginBottom: 20,
    alignSelf: "center",
  },
});
