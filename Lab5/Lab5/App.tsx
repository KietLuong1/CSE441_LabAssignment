import React from "react";
import LoginScreen from "./src/Login";
import Home from "./src/Home";
import AddService from "./src/AddService";
import ServiceDetails from "./src/ServiceDetail";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
// import { IconButton } from "react-native-paper";
// import { Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger } from "react-native-popup-menu";
// import PopUpMenu from "./src/Delete";
import { Alert, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import Delete from "./src/Delete";
import Customer from "./src/Customer";

const Stack = createStackNavigator();

const AllScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Login" component={LoginScreen} />

      <Stack.Screen name="Home" component={TabNavigator} />

    </Stack.Navigator>
  )
}

const HomeScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Home" component={Home}
        options={{ title: 'Home' }} />

      <Stack.Screen name="AddService" component={AddService}
        options={{ title: 'Add Service' }} />

      <Stack.Screen name="Service Details" component={ServiceDetails} options={{
        title: 'Service Details', headerRight: () => {
          return (
            <IconButton icon="dots-vertical" onPress={() => { Delete }} />
          )
        }
      }} />
    </Stack.Navigator>
  )
}

const CustomerScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Customer" screenOptions={{ headerShown: true }} >
      <Stack.Screen name="Customer" component={Customer}
        options={{ title: 'Customer' }} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home" labeled={false} inactiveColor={"greyDark"} >
      <Tab.Screen name="Home" component={HomeScreen}
        options={{ tabBarIcon: 'home', tabBarColor: "#FFD5C3" }} />
      <Tab.Screen name="Customer" component={CustomerScreen}
        options={{ tabBarIcon: 'home', tabBarColor: "#FFD5C3" }} />
    </Tab.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer>
      {/* <TabNavigator /> */}
      <AllScreen />
    </NavigationContainer>
  )
}

export default App;