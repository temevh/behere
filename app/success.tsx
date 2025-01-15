import { View, StyleSheet, Text, Button } from "react-native";
import { SliderInput, CheckboxInput } from "../components/success/";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function SuccessScreen() {
  const router = useRouter();

  const [hard, setHard] = useState(1);
  const [fun, setFun] = useState(1);
  const [again, setAgain] = useState(false);

  const submitPressed = () => {
    console.log("hard:", hard);
    console.log("fun:", fun);
    console.log("again:", again);
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Good job!</Text>
      <SliderInput
        title={"How hard was the task?"}
        updateSliderValue={setHard}
      />
      <SliderInput
        title={"How much did you enjoy the task?"}
        updateSliderValue={setFun}
      />
      <CheckboxInput title={"Again?"} updateCheckboxValue={setAgain} />
      <Button title="Save" onPress={submitPressed} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    color: "white",
    position: "absolute",
    top: 50,
    alignSelf: "center",
    fontFamily: "RobotoMono",
  },
  container: {
    backgroundColor: "darkgreen",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
});
