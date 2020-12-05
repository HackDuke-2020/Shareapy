import React, { Component } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import {
	Container,
	Header,
	Left,
	Body,
	Right,
	Button,
	Icon,
	Title,
	Text,
	List,
	Content,
	ListItem,
} from "native-base";
import { connect } from "react-redux";
import { checkForSignedInUser } from "../redux/actions/auth";

class Loading extends Component {
	componentDidMount() {
		this.props.checkForSignedInUser();
	}

	componentDidUpdate() {
		if (!this.props.user.isSignedIn) {
			this.props.navigation.navigate("Login");
		}
		if (this.props.user.isSignedIn) {
			this.props.navigation.navigate("Main");
		}
	}

	render() {
		return (
			<Container>
				<Content contentContainerStyle={styles.container}>
					<ActivityIndicator />
				</Content>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
	checkForSignedInUser: () => dispatch(checkForSignedInUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
