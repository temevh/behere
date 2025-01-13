import { View, Image, StyleSheet } from "react-native";

const TaskImage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/images/reading.png")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
  container: {
    paddingTop: 70,
    paddingBottom: 40,
  },
});

export default TaskImage;
