import { View, Image, StyleSheet } from "react-native";

const TaskImage = () => {
  return (
    <View>
      <Image
        source={require("../../assets/images/reading.png")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 220,
    height: 220,
  },
});

export default TaskImage;
