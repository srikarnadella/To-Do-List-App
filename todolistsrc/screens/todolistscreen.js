import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import Task from "../components/Task";
import { Entypo } from "@expo/vector-icons";
const todolistscreen = ({ navigation }) => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    //.dismiss() closes the keyboard monkey
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.Title}>To Do List:</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Calendar", {
              taskItems: taskItems,
            })
          }
        >
          <Entypo name="calendar" size={45} color="#7FFFD4" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* title*/}
        <View style={styles.tasksWrapper}>
          <View style={styles.items}>
            {/*task bar part*/}
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}
                >
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      {/* where you write the thing */}
      <View style={styles.tasksInputWrapper}>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  tasksInputWrapper: {
    paddingTop: 10,
    paddingHorizontal: 15,
    paddingBottom: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tasksWrapper: {
    paddingTop: 10,
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  titleWrapper: {
    paddingTop: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Title: {
    fontSize: 40,
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#7FFFD4",
  },
  items: {
    marginTop: 0,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,

    backgroundColor: "grey",
    borderRadius: 10,
    borderColor: "#7FFFD4",
    borderWidth: 5,
    width: 250,
    fontSize: 20,
    textDecorationLine: "underline",
    color: "white",
  },
  addWrapper: {
    width: 70,
    height: 70,
    backgroundColor: "grey",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#7FFFD4",
    borderWidth: 5,
  },
  addText: {
    fontWeight: "bold",
    fontSize: 40,
  },
});

export default todolistscreen;
