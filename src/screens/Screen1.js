import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
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

class Screen1 extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Body>
						<Title>Screen1</Title>
					</Body>
				</Header>
				<Content contentContainerStyle={styles.container}>
					{this.props.user && (
						<View style={{ alignItems: "center", margin: 5 }}>
							<Text>{`name: ${this.props.user.displayName}`}</Text>
							<Text>{`email: ${this.props.user.email}`}</Text>
							<Text>{`uid: ${this.props.user.uid}`}</Text>
						</View>
					)}
				</Content>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Screen1);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
