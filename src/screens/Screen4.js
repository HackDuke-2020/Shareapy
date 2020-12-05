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
} from "native-base";
import { connect } from "react-redux";

class Screen4 extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Left>
						<TouchableOpacity
							onPress={() => {
								this.props.navigation.navigate("Main");
							}}
						>
							<Icon name="ios-arrow-back" />
						</TouchableOpacity>
					</Left>
					<Body>
						<Title>Screen4</Title>
					</Body>
					<Right />
				</Header>
				<Content contentContainerStyle={styles.container}>
					<Text>Screen4</Text>
				</Content>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Screen4);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
