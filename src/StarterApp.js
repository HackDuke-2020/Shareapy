import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./navigation/TabNavigator";
import StackNavigator from "./navigation/StackNavigator";
import { Root, Toast } from "native-base";
import { connect } from "react-redux";
import { clearError } from "./redux/actions/auth";

class StarterApp extends Component {
	componentDidUpdate() {
		for (const [key, value] of Object.entries(this.props.errors)) {
			if (value) {
				Toast.show({
					text: value.message,
					duration: 3000,
					buttonText: "Dismiss",
				});
				this.props.clearError(key);
			}
		}
	}

	render() {
		return (
			<Root>
				<NavigationContainer>
					<StackNavigator />
				</NavigationContainer>
			</Root>
		);
	}
}

const mapStateToProps = (state) => ({
	errors: state.errors,
});

const mapDispatchToProps = (dispatch) => ({
	clearError: (errorType) => dispatch(clearError(errorType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StarterApp);
