import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import Emoji from "react-native-emoji";
import {StackNavigation} from 'react-navigation';

const moods = {
  sad: <Emoji name="coffee" style={{ fontSize: 50 }} />,
  happy: <Emoji name="coffee" style={{ fontSize: 50 }} />,
  angrey: <Emoji name="coffee" style={{ fontSize: 50 }} />,
  crying: <Emoji name="coffee" style={{ fontSize: 50 }} />,
  dontKnow: <Emoji name="coffee" style={{ fontSize: 50 }} />,
};


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={{ width: "100%", padding: 35, paddingBottom: 0 }}>
        <Header />
      </View>
      <ScrollView>
        <View style={{ width: "100%", padding: 35, paddingTop: 0 }}>
          <CalenderMonth />
          <CalenderMonth />
          <CalenderMonth />
        </View>
      </ScrollView>
    </View>
  );
}

const Header = (props) => {
  return (
    <View style={styles.headerRoot}>
      <Text style={styles.headerTitle}>CheckIns</Text>
      <TouchableOpacity
        style={styles.headerIcon}
        onPress={() => {
            let date = new Date();
            console.log(date.getVarDate);
        }}
      >
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const CalenderMonth = (props) => {
  return (
    <View style={styles.calenderMonthRoot}>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text style={styles.monthText}>December</Text>
      </View>
      <View style={styles.daysRoot}>
        <View style={styles.day}>
          <Text style={{ fontWeight: "bold" }}>Mon</Text>
        </View>
        <View style={styles.day}>
          <Text style={{ fontWeight: "bold" }}>Tue</Text>
        </View>
        <View style={styles.day}>
          <Text style={{ fontWeight: "bold" }}>Wed</Text>
        </View>
        <View style={styles.day}>
          <Text style={{ fontWeight: "bold" }}>Thur</Text>
        </View>
        <View style={styles.day}>
          <Text style={{ fontWeight: "bold" }}>Fri</Text>
        </View>
        <View style={styles.day}>
          <Text style={{ fontWeight: "bold" }}>Sat</Text>
        </View>
        <View style={styles.day}>
          <Text style={{ fontWeight: "bold" }}>Sun</Text>
        </View>
      </View>
      <View style={styles.daysRoot}>
        {[
          {
            day: 1,
            hasMood: true,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 2,
            hasMood: false,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 3,
            hasMood: false,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 4,
            hasMood: false,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 5,
            hasMood: false,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 6,
            hasMood: false,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 7,
            hasMood: true,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 8,
            hasMood: false,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 9,
            hasMood: false,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 10,
            hasMood: false,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 11,
            hasMood: false,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 12,
            hasMood: false,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 13,
            hasMood: false,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 14,
            hasMood: false,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 15,
            hasMood: false,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 16,
            hasMood: false,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 17,
            hasMood: false,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 18,
            hasMood: false,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 19,
            hasMood: false,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 20,
            hasMood: false,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 21,
            hasMood: false,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 22,
            hasMood: false,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 23,
            hasMood: false,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 24,
            hasMood: false,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 25,
            hasMood: false,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 26,
            hasMood: false,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 26,
            hasMood: false,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 27,
            hasMood: false,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 28,
            hasMood: false,
            mood: <Entypo name="emoji-flirt" size={24} color="green" />,
          },
          {
            day: 29,
            hasMood: true,
            mood: <Entypo name="emoji-happy" size={24} color="green" />,
          },
          {
            day: 30,
            hasMood: true,
            mood: <Entypo name="emoji-sad" size={24} color="green" />,
          },
        ].map(({ hasMood, day, mood }, index) => {
          return (
            <View style={styles.day} key={index}>
              {hasMood === true ? mood : <Text>{day}</Text>}
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#09C9C9",
    borderRadius: 50,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  headerRoot: {
    width: "100%",
    paddingTop: 20,
    // padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "900",
  },
  calenderMonthRoot: {
    width: "100%",
    backgroundColor: "#F1F2F2",
    padding: 20,
    borderRadius: 10,
    paddingBottom: 30,
    marginTop: 30,
  },
  monthText: {
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 15,
  },
  daysRoot: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  day: {
    width: `${100 / 7}%`,
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
    marginBottom: 5,
  },
});
