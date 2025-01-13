import { View, Image, StyleSheet } from "react-native";

const TaskImage = () => {
  return (
    <Image
      source={require("../../assets/images/reading.png")}
      style={styles.image}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 260,
    height: 260,
  },
});

export default TaskImage;
