import { View, Text, StyleSheet } from "react-native";

const TaskText = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  const formattedDate = `${day}.${month}.${year}`;

  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>Daily task {formattedDate}</Text>
      <Text style={styles.taskText}>Read a book for 15 minutes</Text>
      <Text style={styles.categoryText}>Education</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: 300,
    borderRadius: 10,
    backgroundColor: "#595151",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    gap: 10,
  },
  dateText: {
    fontSize: 22,
    color: "grey",
  },
  taskText: {
    fontSize: 28,
    color: "white",
    textAlign: "center",
  },
  categoryText: {
    fontSize: 20,
    color: "grey",
  },
});

export default TaskText;
