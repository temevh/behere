import { Button } from "react-native-paper";

const SaveSuccessButton = ({ savePressed, isDisabled }) => {
  return (
    <Button
      mode="contained"
      disabled={isDisabled}
      onPress={savePressed}
      buttonColor="green"
      style={{ borderRadius: 6 }}
      labelStyle={{
        fontSize: 16,
        fontFamily: "RobotoMono",
      }}
    >
      Save
    </Button>
  );
};

export default SaveSuccessButton;
