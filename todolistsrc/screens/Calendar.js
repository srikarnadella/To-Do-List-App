import React, { useState, useEffect } from "react";
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
const Calendar = (props) => {
  var inTask = props.navigation.getParam("taskItems");
  var monk = "                                  ";
  var today = new Date();
  var date = " (" + (today.getMonth() + 1) + "/" + today.getDate() + ")";
  var dayOftheWeek = today.getDay();

  const [taskItems, setTaskItems] = useState([]);

  useEffect(() => {
    setTaskItems(inTask);
  }, []);

  const [day2taskItems, setday2taskItems] = useState([]);

  useEffect(() => {
    setday2taskItems(inTask);
  }, []);

  const [day3taskItems, setday3taskItems] = useState([]);

  useEffect(() => {
    setday3taskItems(inTask);
  }, []);

  const [day4taskItems, setday4taskItems] = useState([]);

  useEffect(() => {
    setday4taskItems(inTask);
  }, []);

  const [day5taskItems, setday5taskItems] = useState([]);

  useEffect(() => {
    setday5taskItems(inTask);
  }, []);

  const [day6taskItems, setday6taskItems] = useState([]);

  useEffect(() => {
    setday6taskItems(inTask);
  }, []);

  const [day7taskItems, setday7taskItems] = useState([]);

  useEffect(() => {
    setday7taskItems(inTask);
  }, []);

  const completeTask = (index, list, func) => {
    let itemsCopy = [...list];
    itemsCopy.splice(index, 1);
    func(itemsCopy);
  };
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={styles.day}>
          <Text style={styles.text}>
            {days[dayOftheWeek % 7]}
            {date}
            {monk}
          </Text>
          <View style={styles.horizontal}></View>
          <View style={styles.tasksWrapper}>
            <View style={styles.items}>
              {/*task bar part*/}
              {taskItems.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => completeTask(index, taskItems, setTaskItems)}
                  >
                    <Task text={item} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
        <View style={styles.vertical}></View>
        <View style={styles.day}>
          <Text style={styles.text}>
            {days[(dayOftheWeek + 1) % 7]}
            {monk}
          </Text>
          <View style={styles.horizontal}></View>
          <View style={styles.tasksWrapper}>
            <View style={styles.items}>
              {/*task bar part*/}
              {day2taskItems.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      completeTask(index, day2taskItems, setday2taskItems)
                    }
                  >
                    <Task text={item} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
        <View style={styles.vertical}></View>
        <View style={styles.day}>
          <Text style={styles.text}>
            {days[(dayOftheWeek + 2) % 7]}
            {monk}
          </Text>
          <View style={styles.horizontal}></View>
          <View style={styles.tasksWrapper}>
            <View style={styles.items}>
              {/*task bar part*/}
              {day3taskItems.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      completeTask(index, day3taskItems, setday3taskItems)
                    }
                  >
                    <Task text={item} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
        <View style={styles.vertical}></View>
        <View style={styles.day}>
          <Text style={styles.text}>
            {days[(dayOftheWeek + 3) % 7]}
            {monk}
          </Text>
          <View style={styles.horizontal}></View>
          <View style={styles.tasksWrapper}>
            <View style={styles.items}>
              {/*task bar part*/}
              {day4taskItems.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      completeTask(index, day4taskItems, setday4taskItems)
                    }
                  >
                    <Task text={item} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
        <View style={styles.vertical}></View>
        <View style={styles.day}>
          <Text style={styles.text}>
            {days[(dayOftheWeek + 4) % 7]}
            {monk}
          </Text>
          <View style={styles.horizontal}></View>
          <View style={styles.tasksWrapper}>
            <View style={styles.items}>
              {/*task bar part*/}
              {day5taskItems.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      completeTask(index, day5taskItems, setday5taskItems)
                    }
                  >
                    <Task text={item} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
        <View style={styles.vertical}></View>
        <View style={styles.day}>
          <Text style={styles.text}>
            {days[(dayOftheWeek + 5) % 7]}
            {monk}
          </Text>
          <View style={styles.horizontal}></View>
          <View style={styles.tasksWrapper}>
            <View style={styles.items}>
              {/*task bar part*/}
              {day6taskItems.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      completeTask(index, day6taskItems, setday6taskItems)
                    }
                  >
                    <Task text={item} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
        <View style={styles.vertical}></View>
        <View style={styles.day}>
          <Text style={styles.text}>
            {days[(dayOftheWeek + 6) % 7]}
            {monk}
          </Text>
          <View style={styles.horizontal}></View>
          <View style={styles.tasksWrapper}>
            <View style={styles.items}>
              {/*task bar part*/}
              {day7taskItems.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      completeTask(index, day7taskItems, setday7taskItems)
                    }
                  >
                    <Task text={item} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 100,
    flexDirection: "row",
  },
  day: {
    flex: 100,
    flexDirection: "column",
  },
  tasksWrapper: {
    paddingTop: 10,
    paddingHorizontal: 5,
    paddingBottom: 30,
    flex: 25,
  },
  items: {
    marginTop: 0,
  },
  horizontal: {
    flex: 1,
    backgroundColor: "#7FFFD4",
  },
  vertical: {
    flex: 2,
    backgroundColor: "#7FFFD4",
  },
  buffer: {
    flex: 25,
    backgroundColor: "black",
  },
  text: {
    fontSize: 30,
    color: "#7FFFD4",
  },
  addWrapper: {
    width: 200,
    height: 60,
    backgroundColor: "grey",
    borderRadius: 60,
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

export default Calendar;
