import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
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
	Badge,
} from "native-base";
import { connect } from "react-redux";
import { signout } from "../redux/actions/auth";

class Screen3 extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Left />
					<Body>
						<Title>Screen3</Title>
					</Body>
					<Right>
						<TouchableOpacity
							onPress={() => {
								this.props.navigation.navigate("Screen4");
							}}
						>
							<Icon name="book" style={{ color: "gray" }} />
						</TouchableOpacity>
					</Right>
				</Header>
				<Content contentContainerStyle={styles.container}>
					<View style={{ alignItems: "center", margin: 5 }}>
						<Button
							rounded
							onPress={() => {
								this.props.signout();
							}}
						>
							<Text>Log Out</Text>
						</Button>
					</View>
				</Content>
			</Container>
		);
	}
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
	signout: () => dispatch(signout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Screen3);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
