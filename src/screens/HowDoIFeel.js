import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import Emoji from "react-native-emoji";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    flexWrap: "wrap",
  },
  col: {
    width: `48%`,
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  input: {
    marginTop: 20,
    minHeight: 100,
    width: "100%",
    backgroundColor: "#eee",
    borderRadius: 10,
    padding: 10,
  },
});

export default function HowDoIFeel({ closeDialog }) {
  return (
    <View
      style={{
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
        backgroundColor: "rgba(0,0,0,0.1)",
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          width: "100%",
          minHeight: 300,
          borderRadius: 20,
          padding: 20,
          paddingBottom: 35,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#eee",
            width: 30,
            height: 30,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign
            name="close"
            size={19}
            color="#808285"
            onPress={closeDialog}
          />
        </TouchableOpacity>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            How do you feel
          </Text>
          <View style={[styles.row, { marginTop: 20 }]}>
            <TouchableOpacity style={styles.col}>
              <Emoji
                name=":unamused:"
                style={{ fontSize: 20, marginRight: 10 }}
              />
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>Down</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.col}>
              <Emoji
                name=":disappointed:"
                style={{ fontSize: 20, marginRight: 10 }}
              />
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>Sad</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.col}>
              <Emoji name=":smile:" style={{ fontSize: 20, marginRight: 10 }} />
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>Happy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.col}>
              <Emoji
                name=":stuck_out_tongue_winking_eye:"
                style={{ fontSize: 20, marginRight: 10 }}
              />
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>Supper</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <View style={styles.input}>
              <TextInput
                placeholder="Journal your thoughts about this moment"
                multiline={true}
              />
            </View>
          </View>
          <MyButton
            onPress={() => {
              closeDialog();
            }}
          />
        </View>
      </View>
    </View>
  );
}

const MyButton = (props) => {
  return (
    <TouchableOpacity
      {...props}
      style={{
        width: "100%",
        height: 50,
        borderRadius: 10,
        backgroundColor: "#23C4F4",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      <Text style={{ fontSize: 16, color: "#fff" }}>Done</Text>
    </TouchableOpacity>
  );
};
