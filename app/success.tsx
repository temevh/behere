import { View, StyleSheet, Text } from "react-native";
import {
  SliderInput,
  CheckboxInput,
  SaveSuccessButton,
} from "../components/success/";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function SuccessScreen() {
  const router = useRouter();

  const [hard, setHard] = useState(1);
  const [fun, setFun] = useState(1);
  const [again, setAgain] = useState(false);

  const savePressed = () => {
    console.log("hard:", hard);
    console.log("fun:", fun);
    console.log("again:", again);
    router.push("/");
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
        <CheckboxInput title={"Again?"} updateCheckboxValue={setAgain} />
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
