import React, { Component } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
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
	Card,
	CardItem,
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
					<Accomplishment />
					<Challenge />
				</Content>
			</Container>
		);
	}
}

class Accomplishment extends Component {
	render() {
		return (
			<Card
				style={{
					padding: 10,
					marginLeft: 10,
					marginRight: 10,
					borderRadius: 15,
				}}
			>
				<CardItem header bordered>
					<Left>
						<Text style={{ color: "#147efb" }}>Firstname Lastname</Text>
					</Left>
					<Right style={{ justifyContent: "flex-end" }}>
						<Icon
							style={{ color: "green" }}
							type="MaterialCommunityIcons"
							name="shield-check"
						/>
					</Right>
				</CardItem>
				<CardItem>
					<Body>
						<Text>
							Today I had a presentation for my Spanish class. I advertised at
							the beginning and did 10 cancellations.
						</Text>
					</Body>
				</CardItem>
			</Card>
		);
	}
}

class Challenge extends Component {
	render() {
		return (
			<Card
				style={{
					padding: 10,
					marginLeft: 10,
					marginRight: 10,
					borderRadius: 15,
				}}
			>
				<CardItem header bordered>
					<Left style={{ flexDirection: "column", flex: 1 }}>
						<Text style={{ color: "#147efb" }}>Firstname Lastname</Text>
						<Text
							style={{ color: "#147efb", marginTop: 10 }}
						>{`Firstname Lastname`}</Text>
					</Left>
					<Right style={{ justifyContent: "flex-end", width: 300 }}>
						<Icon style={{ color: "green" }} type="Ionicons" name="send" />
					</Right>
				</CardItem>
				<CardItem>
					<Body>
						<Text>I challenge you to do 20 intentional stutters tomorrow</Text>
					</Body>
				</CardItem>
			</Card>
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
		// alignItems: "center",
		// justifyContent: "center",
	},
});
