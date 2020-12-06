import React, { Component } from "react";
import {
	View,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	Switch,
	Dimensions,
	Animated,
} from "react-native";
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
import DeckSwiper1 from "./DeckSwiper";
import { ProgressChart } from "react-native-chart-kit";

const achievementLevels = [
	"Novice",
	"Bronze",
	"Silver",
	"Gold",
	"Platinum",
	"Diamond",
];
const levelUp = 100;

class Profile extends React.Component {
	render() {
		return (
			<View style={styles.profile}>
				<Text style={styles.title}>{this.props.user.name}</Text>
				<Text style={{ color: "#808080" }}>{this.props.user.level}</Text>
			</View>
		);
	}
}

class Achievements extends React.Component {
	render() {
		return (
			<View style={{ ...styles.achievement, height: 500 }}>
				<Text style={styles.title}>Recent Achievements</Text>
				<DeckSwiper1 dataSource={this.props.user} />
			</View>
		);
	}
}

class Screen5 extends React.Component {
	constructor(props) {
		super();

		const myCompletedChallenges = props.user.justMyPosts.filter(
			(obj) => obj.type === "completedchallenge",
		);
		const completed = myCompletedChallenges.map((obj) => ({
			text: obj.text,
			name: obj.name1,
			description: new Date(obj.date).toLocaleDateString("en", {
				year: "numeric",
				month: "numeric",
				day: "numeric",
			}),
			profImage: require("../../assets/profilepic.png"),
			achImage: require("../../assets/achpic.png"),
		}));

		this.state = {
			user: {
				name: props.user.displayName,
				points: props.user.justMyPosts.length * 10,
				level: "Novice",
				completed,
				// completed: [
				// 	{
				// 		text: "challenge1",
				// 		name: "name1",
				// 		description: "description1",
				// 		profImage: require("../../assets/profilepic.png"),
				// 		achImage: require("../../assets/achpic.png"),
				// 	},
				// 	{
				// 		text: "challenge2",
				// 		name: "name2",
				// 		description: "description2",
				// 		profImage: require("../../assets/profilepic.png"),
				// 		achImage: require("../../assets/achpic.png"),
				// 	},
				// 	{
				// 		text: "challenge3",
				// 		name: "name3",
				// 		description: "description3",
				// 		profImage: require("../../assets/profilepic.png"),
				// 		achImage: require("../../assets/achpic.png"),
				// 	},
				// 	{
				// 		text: "challenge4",
				// 		name: "name4",
				// 		description: "description4",
				// 		profImage: require("../../assets/profilepic.png"),
				// 		achImage: require("../../assets/achpic.png"),
				// 	},
				// ],
			},
		};
	}

	findLevel() {
		return achievementLevels[this.state.user.points / levelUp - 1];
	}

	render() {
		return (
			<Container>
				<Header>
					<Left>
						<TouchableOpacity
							style={{ marginLeft: 15 }}
							onPress={() => {
								this.props.navigation.navigate("Main");
							}}
						>
							<Icon style={{ color: "#147efb" }} name="ios-arrow-back" />
						</TouchableOpacity>
					</Left>
					<Body>
						<Title>Triumphs</Title>
					</Body>
					<Right />
				</Header>
				<Content>
					<ScrollView style={styles.container}>
						<Profile user={this.state.user} />
						<ProgressChart
							style={styles.chart}
							data={{
								//labels: [, , "Swim"],
								data: [, , 0.4],
							}}
							width={Dimensions.get("window").width - 40}
							height={220}
							strokeWidth={16}
							radius={32}
							chartConfig={{
								backgroundColor: "#ffffff",
								backgroundGradientFrom: "#ffffff",
								backgroundGradientTo: "#ffffff",
								decimalPlaces: 2,
								color: (opacity = 1) => `rgba(20, 126, 251, ${opacity})`,
								labelColor: (opacity = 1) => `rgba(20, 126, 251, ${opacity})`,
								style: {
									borderRadius: 16,
								},
								propsForDots: {
									r: "6",
									strokeWidth: "2",
									stroke: "#ffa726",
								},
							}}
							hideLegend={true}
						/>
						<Text style={{ color: "#808080", paddingTop: 20 }}>
							____________________________________
						</Text>
						<Achievements user={this.state.user} />
					</ScrollView>
					<View style={styles.chartPoint}>
						<Text style={styles.chartPoint}>{this.state.user.points}</Text>
						<Text style={styles.chartPoint1}>Points</Text>
					</View>
				</Content>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Screen5);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 20,
		// alignItems: "center",
		// justifyContent: "center",
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
	},
	achievement: {
		paddingTop: 40,
	},
	points: {
		marginHorizontal: Dimensions.get("window").width / 5 + 10,
		fontSize: 18,
		fontStyle: "italic",
		color: "#147efb",
	},
	chart: {
		paddingTop: 10,
	},
	chartPoint: {
		flex: 1,
		position: "absolute",
		fontSize: 50,
		color: "#147efb",
		fontWeight: "bold",
		paddingTop: 160,
		marginHorizontal: Dimensions.get("window").width / 5 + 1,
		//textAlign: "center",
	},
	chartPoint1: {
		flex: 1,
		position: "absolute",
		fontSize: 18,
		color: "#147efb",
		paddingTop: 223,
		marginHorizontal: Dimensions.get("window").width / 5 + 10,
		//textAlign: "center",
	},
	// profile: {
	// 	margin: 10,
	// },
});
