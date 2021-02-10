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

const monthsList = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

var getDaysInMonth = function (month, year) {
  return new Date(year, month, 0).getDate();
};

const initialMoods = (
  year = new Date().getFullYear(),
  month = new Date().getMonth()
) => {
  const days = getDaysInMonth(month, year);
  let count = [];
  for (var i = 1; i <= days; i++) {
    count.push({
      mood: "happy",
      note: "",
    });
  }
  return {
    [new Date().getFullYear()]: {
      [new Date().getMonth()]: {
        [new Date().getDate()]: count,
      },
    },
  };
};

const monthDaysList = (
  year = new Date().getFullYear(),
  month = new Date().getMonth()
) => {
  const days = getDaysInMonth(month, year);
  let count = [];
  for (var i = 1; i <= days; i++) {
    count.push(i);
  }
  return count;
};

export default function Home(props) {
  const [showDialog, setShowDialog] = useState(false);
  const closeDialog = (props) => {
    setShowDialog(false);
  };

  const getMood = (year, month, day) => {
    if (year in myMoods) {
      if (month in myMoods[year]) {
        if (day in myMoods[year][month]) {
          return myMoods[year][month][day];
        }
        return false;
      }
      return false;
    }
    return false;
  };

  const [myMoods, setMyMoods] = useState(initialMoods);

  const setMood = (_mood = {}) => {
    if (_mood === false) {
      return;
    }

    const { year, mood, month, day } = _mood;

    if (year in myMoods) {
      if (month in myMoods[year]) {
        if (day in myMoods[year][month]) {
          setMyMoods({
            ...myMoods,
            [year]: {
              ...myMoods[year],
              [month]: {
                ...myMoods[year][month],
                [day]: {
                  ...mood,
                },
              },
            },
          });
          console.log(myMoods)
          return true;
        }
        return false;
      }
      return false;
    }
    return false;
  };

  return (
    <React.Fragment>
      <View style={styles.container}>
        <StatusBar />
        <View style={{ width: "100%", padding: 35, paddingBottom: 0 }}>
          <Header {...props} setShowDialog={setShowDialog} />
        </View>
        <ScrollView>
          <View style={{ width: "100%", padding: 35, paddingTop: 0 }}>
            <CalenderMonth
              year={new Date().getFullYear()}
              month={new Date().getMonth() -1}
              getMood={getMood}
              setMood={setMood}
            />
            <CalenderMonth
              year={new Date().getFullYear()}
              month={new Date().getMonth()}
              getMood={getMood}
              setMood={setMood}
            />
            <CalenderMonth
              year={new Date().getFullYear()}
              month={new Date().getMonth() +1}
              getMood={getMood}
              setMood={setMood}
            />
          </View>
        </ScrollView>
      </View>
      {showDialog && (
        <View style={styles.dialog}>
          <HowDoIFeel setMood={setMood} closeDialog={closeDialog} />
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
  const { year, month, getMood } = props;
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
        <Text style={styles.monthText}>{monthsList[month]}</Text>
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
        {monthDaysList().map((day, index) => {
          let mood = getMood(year, month, day);
          return (
            <View style={styles.day} key={index}>
              {mood !== false ? <Text>asxasx</Text>: <Text>{day}</Text>}
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
