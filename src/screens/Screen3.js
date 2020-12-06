import React, { Component } from "react";
import * as Linking from "expo-linking";
import {
	View,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Dimensions,
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
	Badge,
	Card,
	CardItem,
	Fab,
	Form,
	Item,
	Input,
	Textarea,
} from "native-base";
import { connect } from "react-redux";
import { signout } from "../redux/actions/auth";

const myBlue = "#147efb";
const myGreen = "#008000";
const myGray = "#808080";
const stutteringBlurb =
	"Stuttering is a speech disorder experienced by 3 million Americans. It is characterized by repeated words, sounds, or syllables and disruptions in the flow of speech. There are many different types of and causes of stuttering.";
const CBTblurb =
	"Cognitive Behavioral Therapy is a form of psychotherapy used to treat many different neurological and psychological conditions. It can help people who stutter to feel less apprehensive about stuttering through various techniques. Rather than trying to prohibit stuttering altogether, it is beneficial to encourage yourself to stutter intentionally, to teach your brain that stuttering is not a bad thing that needs to be prevented. Challenges you complete through INSERT_APP_NAME_HERE will encourage you to stutter and take more control of your voice. ";
const getHelpBlurb =
	"There are many available resources on places to find help with stuttering. The American Institute for Stuttering has a highly effective online therapy program.";
const tester = "https://instagram.com/${info}";
const findTherapists = "https://stutteringtreatment.org/online";
const CBTinfoWebsite =
	"https://www.stutteringhelp.org/introduction-cognitive-therapy";
const stutteringInfoWebsite = "https://www.nidcd.nih.gov/health/stuttering";
const { width, height } = Dimensions.get("window");

class Screen3 extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Left />
					<Body>
						<Title>Info</Title>
					</Body>
					<Right>
						<TouchableOpacity
							style={{ marginRight: 15 }}
							onPress={() => {
								this.props.signout();
							}}
						>
							<Icon name="log-out" style={{ color: "#147efb" }} />
						</TouchableOpacity>
					</Right>
				</Header>
				<Content contentContainerStyle={styles.container}>
					<ScrollView style={styles.scrollview}>
						<List>
							<ListItem>
								<StutteringInfo />
							</ListItem>
							<ListItem>
								<CBTinfo />
							</ListItem>
							<ListItem>
								<GetHelp />
							</ListItem>
						</List>
					</ScrollView>
				</Content>
			</Container>
		);
	}
}
class CBTinfo extends Component {
	render() {
		return (
			<Card
				style={{
					width: width - 45,
					padding: 5,
					marginLeft: 7,
					//marginRight: 7,
					borderRadius: 15,
					marginTop: 7,
				}}
			>
				<CardItem header bordered>
					<View>
						<Text style={{ color: myBlue, fontSize: 22, marginTop: 1 }}>
							{"Cognitive Behavioral Therapy (CBT)"}
						</Text>
					</View>
				</CardItem>
				<CardItem style={{ flexDirection: "column" }}>
					<View>
						<Text style={{ color: myGray, marginTop: 0 }}>{CBTblurb}</Text>
					</View>
					<View style={{ alignItems: "center" }}>
						<Button
							//backgroundColor = "red"
							style={{
								// alignContent: "center",
								fontSize: 20,
								backgroundColor: myBlue,
								marginTop: 10,
								borderRadius: 10,
							}}
							onPress={() => {
								Linking.openURL(CBTinfoWebsite);
							}}
						>
							<Text style={{ color: "white" }}> Learn More About CBT </Text>
						</Button>
					</View>
				</CardItem>
			</Card>
		);
	}
}

class StutteringInfo extends Component {
	render() {
		return (
			<Card
				style={{
					padding: 5,
					marginLeft: 7,
					//marginRight:7,
					width: width - 45,
					borderRadius: 15,
					marginTop: 7,
				}}
			>
				<CardItem header bordered>
					<View>
						<Text style={{ color: myBlue, fontSize: 22, marginTop: 1 }}>
							{"Stuttering"}
						</Text>
					</View>
				</CardItem>
				<CardItem style={{ flexDirection: "column" }}>
					<View>
						<Text style={{ color: myGray, marginTop: 0 }}>
							{stutteringBlurb}
						</Text>
						{/* <Button
							style = {{
								fontSize: 20,
								backgroundColor: myBlue, //"blue",
								marginTop: 10,
								borderRadius: 10
							}}
							onPress = {() => {
								Linking.openURL(stutteringInfoWebsite);
							}}
						>
							<Text>Learn More About Stuttering</Text>
						</Button> */}
					</View>
					<View style={{ alignItems: "center" }}>
						<Button
							style={{
								fontSize: 20,
								backgroundColor: myBlue, //"blue",
								marginTop: 10,
								borderRadius: 10,
							}}
							onPress={() => {
								Linking.openURL(stutteringInfoWebsite);
							}}
						>
							<Text>Learn More About Stuttering</Text>
						</Button>
					</View>
				</CardItem>
			</Card>
		);
	}
}

class GetHelp extends Component {
	render() {
		return (
			<Card
				style={{
					padding: 5,
					marginLeft: 7,
					//marginRight: 4,
					borderRadius: 15,
					marginTop: 7,
					width: width - 45,
				}}
			>
				<CardItem header bordered>
					<View>
						<Text style={{ color: myBlue, fontSize: 22, marginTop: 1 }}>
							{"How to get help"}
						</Text>
					</View>
				</CardItem>
				<CardItem style={{ flexDirection: "column" }}>
					<View>
						<Text style={{ color: myGray, marginTop: 0 }}>{getHelpBlurb}</Text>
					</View>
					<View style={{ alignItems: "center" }}>
						<Button
							style={{
								fontSize: 20,
								backgroundColor: myBlue, //"blue",
								marginTop: 10,
								borderRadius: 10,
							}}
							onPress={() => {
								Linking.openURL(findTherapists);
							}}
						>
							<Text>Find Virtual Speech Therapy</Text>
						</Button>
					</View>
				</CardItem>
			</Card>
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
		//alignItems: "center",
		//justifyContent: "center",
	},
});
