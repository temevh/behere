import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";

const SaveSuccessButton = ({ savePressed, isDisabled }) => {
  return (
    <Button
      mode="contained"
      disabled={isDisabled}
      onPress={savePressed}
      buttonColor="green"
      style={styles.button}
      contentStyle={styles.content}
      labelStyle={styles.text}
    >
      Save
    </Button>
  );
};

export default SaveSuccessButton;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontFamily: "RobotoMono",
    paddingTop: 15,
  },
  button: {
    height: 60,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 3,
  },
  content: {
    height: "100%",
    justifyContent: "center",
  },
});
