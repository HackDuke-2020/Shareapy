import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigator } from "./TabNavigator";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Loading from "../screens/Loading";
import Screen4 from "../screens/Screen4";

const Stack = createStackNavigator();

class StackNavigator extends Component {
	render() {
		return (
			<Stack.Navigator
				initialRouteName="Loading"
				screenOptions={{ headerShown: false, animationEnabled: false }}
			>
				<Stack.Screen name="Loading" component={Loading} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Signup" component={Signup} />
				<Stack.Screen name="Screen4" component={Screen4} />
				<Stack.Screen name="Main" component={TabNavigator} />
			</Stack.Navigator>
		);
	}
}

export default StackNavigator;
