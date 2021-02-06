import React from "react";
import { View } from "react-native";
import Emoji from "react-native-emoji";


export default function AbmFoodApp(props) {
  return (
    <View style={{ width: "100%" }}>
      <Header />
    </View>
  );
}

function Header(props) {
  return <View style={{}}></View>;
}

function Search(props) {
  return <View style={}></View>;
}

function Picture(props) {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#EAEAEA",
        height: 200,
        borderRadius: 10,
      }}
    ></View>
  );
}
