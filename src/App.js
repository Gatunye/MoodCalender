import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import HowDoIFeel from "./screens/HowDoIFeel";

const Stack = createStackNavigator();
const MainStack = createStackNavigator();

function MainScreen(props){ 
    return (
      <MainStack.Navigator>
        <MainStack.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </MainStack.Navigator>
    );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode="modal"
        options={{ headerShown: false }}
      >
        <Stack.Screen
          name="main"
          component={MainScreen}
          mode="modal"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="howDoIFeel"
          component={HowDoIFeel}
          mode="model"
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
