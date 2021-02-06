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
import { useState } from "react";
import HowDoIFeel from "./HowDoIFeel";

const moods = {
  down: <Emoji name=":unamused:" style={{ fontSize: 20 }} />,
  sad: <Emoji name=":disappointed:" style={{ fontSize: 20 }} />,
  happy: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
  supper: (
    <Emoji name=":stuck_out_tongue_winking_eye:" style={{ fontSize: 20 }} />
  ),
};

export default function Home(props) {
  const [showDialog, setShowDialog] = useState(false);
  const closeDialog = (props) => {
    setShowDialog(false);
  };

  const [myMoods, setMyMoods] = useState({
    2020: {
      jan: [
        {
          day: "",
          month: "",
          year: "",
          note: "",
          mood: "",
        },
      ],
    },
  });

  return (
    <React.Fragment>
      <View style={styles.container}>
        <StatusBar />
        <View style={{ width: "100%", padding: 35, paddingBottom: 0 }}>
          <Header {...props} setShowDialog={setShowDialog} />
        </View>
        <ScrollView>
          <View style={{ width: "100%", padding: 35, paddingTop: 0 }}>
            <CalenderMonth />
            <CalenderMonth />
            <CalenderMonth />
          </View>
        </ScrollView>
      </View>
      {showDialog && (
        <View style={styles.dialog}>
          <HowDoIFeel closeDialog={closeDialog} />
        </View>
      )}
    </React.Fragment>
  );
}

const Header = ({ navigation, setShowDialog }) => {
  return (
    <View style={styles.headerRoot}>
      <Text style={styles.headerTitle}>CheckIns</Text>
      <TouchableOpacity
        style={styles.headerIcon}
        onPress={() => {
          setShowDialog(true);
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
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 2,
            hasMood: false,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 3,
            hasMood: false,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 4,
            hasMood: false,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 5,
            hasMood: false,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 6,
            hasMood: false,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 7,
            hasMood: true,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 8,
            hasMood: false,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 9,
            hasMood: false,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 10,
            hasMood: false,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 11,
            hasMood: false,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 12,
            hasMood: false,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 13,
            hasMood: false,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 14,
            hasMood: false,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 15,
            hasMood: false,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 16,
            hasMood: false,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 17,
            hasMood: false,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 18,
            hasMood: false,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 19,
            hasMood: false,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 20,
            hasMood: false,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 21,
            hasMood: false,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 22,
            hasMood: false,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 23,
            hasMood: false,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 24,
            hasMood: false,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 25,
            hasMood: false,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 26,
            hasMood: false,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 26,
            hasMood: false,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 27,
            hasMood: false,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 28,
            hasMood: false,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 29,
            hasMood: true,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
          },
          {
            day: 30,
            hasMood: true,
            mood: <Emoji name=":smile:" style={{ fontSize: 20 }} />,
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
  container: {
    backgroundColor: "#fff",
  },
  dialog: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.7)",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    width: "100%",
  },
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
