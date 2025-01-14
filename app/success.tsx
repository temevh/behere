import { View, StyleSheet, Text, Button } from "react-native";
import { SliderInput } from "../components/success/index";
import { useState } from "react";

export default function SuccessScreen() {
  const [hard, setHard] = useState(1);
  const [fun, setFun] = useState(1);

  const submitPressed = () => {
    console.log("hard:", hard);
    console.log("fun:", fun);
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
      <Button title="Submit" onPress={submitPressed} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    color: "white",
  },
  container: {
    backgroundColor: "darkgreen",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
