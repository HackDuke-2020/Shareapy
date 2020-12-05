import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store/index";
import StarterApp from "./src/StarterApp";

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<StarterApp />
			</Provider>
		);
	}
}
