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
						<Title>Activity</Title>
					</Body>
				</Header>
				<Content contentContainerStyle={styles.container}>
					<Accomplishment
						name="Firstname Lastname"
						text="Today I had a presentation for my Spanish class. I advertised at
							the beginning and did 10 cancellations."
					/>
					<Challenge
						name1="firstname lastname"
						name2="Firstname Lastname"
						text="I challenge you to do 20 intentional stutters tomorrow"
					/>
					<CompletedChallenge
						name1="firstname lastname"
						name2="Firstname Lastname"
						text="I challenge you to do 20 intentional stutters tomorrow"
					/>
				</Content>
			</Container>
		);
	}
}

class Accomplishment extends Component {
	render() {
		const { name, text } = this.props;
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
					<View style={{ flex: 8 }}>
						<Text style={{ color: "#147efb" }}>{`${name}`}</Text>
					</View>
					<View
						style={{ justifyContent: "flex-end", width: 40, flex: 1, left: 20 }}
					>
						<Icon
							style={{ color: "green" }}
							type="MaterialCommunityIcons"
							name="trophy"
						/>
					</View>
				</CardItem>
				<CardItem>
					<Body>
						<Text>{`${text}`}</Text>
					</Body>
				</CardItem>
			</Card>
		);
	}
}

class Challenge extends Component {
	render() {
		const { name1, name2, text } = this.props;
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
					<View style={{ flex: 8 }}>
						<Text style={{ color: "#147efb" }}>{`${name1} challenges:`}</Text>
						<Text style={{ color: "#147efb", marginTop: 10 }}>
							{`${name2}`}
						</Text>
					</View>
					<View
						style={{
							justifyContent: "flex-end",
							width: 40,
							flex: 1,
							left: 20,
						}}
					>
						<Icon style={{ color: "green" }} type="Ionicons" name="send" />
					</View>
				</CardItem>
				<CardItem>
					<Body>
						<Text>{`${text}`}</Text>
					</Body>
				</CardItem>
			</Card>
		);
	}
}

class CompletedChallenge extends Component {
	render() {
		const { name1, name2, text } = this.props;
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
					<View style={{ flex: 8 }}>
						<Text style={{ color: "#147efb" }}>{`${name1} challenged:`}</Text>
						<Text style={{ color: "#147efb", marginTop: 10 }}>
							{`${name2}`}
						</Text>
					</View>
					<View
						style={{
							justifyContent: "flex-end",
							width: 40,
							flex: 1,
							left: 20,
						}}
					>
						<Icon
							style={{ color: "green" }}
							type="MaterialCommunityIcons"
							name="shield-check"
						/>
					</View>
				</CardItem>
				<CardItem>
					<Body>
						<Text>{`${text}`}</Text>
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
