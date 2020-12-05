import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "native-base";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";

const Tab = createBottomTabNavigator();

class TabNavigator extends Component {
	render() {
		return (
			<Tab.Navigator
				tabBarOptions={{ showLabel: false, style: { height: 60 } }}
			>
				<Tab.Screen
					name="Screen1"
					component={Screen1}
					options={{
						tabBarIcon: ({ focused }) => (
							<Icon
								name="person"
								style={{ color: focused ? "#147EFB" : "gray" }}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Screen2"
					component={Screen2}
					options={{
						tabBarIcon: ({ focused }) => (
							<Icon
								name="add"
								style={{ color: focused ? "#147EFB" : "gray" }}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Screen3"
					component={Screen3}
					options={{
						tabBarIcon: ({ focused }) => (
							<Icon
								name="ios-log-out"
								style={{ color: focused ? "#147EFB" : "gray" }}
							/>
						),
					}}
				/>
			</Tab.Navigator>
		);
	}
}

export { TabNavigator };
