import React from "react";
//import {View, Text, StyleSheet} from "react-native"
//import { createSwitchNavigator, createAppContainer } from "react-navigation";
import DrawerNavigator from "./Navigation/DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";



/*const AppSwitchNavigator = createSwitchNavigator({
  CreatePost: CreatePost,
  Feed:Feed,
  Profile:Profile
})

const AppNavigator = createAppContainer(AppSwitchNavigator)*/

export default function App(){
  return(
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  )
}