import React, { Component } from "react";
import {
	View,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	Modal,
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
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const myBlue = "#147efb";
const myGreen = "#008000";
const myGray = "#808080";
class Screen1 extends Component {
	state = {
		fabActive: false,
		overlayVisible: false,
		modalType: "",
		text: "",
	};

	render() {
		const { width, height } = Dimensions.get("window");
		return (
			<Container>
				<Header>
					<Left />
					<Body>
						<Title>Activity</Title>
					</Body>
					<Right
						style={{
							marginRight: 5,
						}}
					>
						<TouchableOpacity
							style={{ marginRight: 15 }}
							onPress={() => {
								this.setState({
									overlayVisible: !this.state.overlayVisible,
									modalType: "accomplishment",
								});
							}}
						>
							<Icon name="trophy" style={{ color: "#147efb" }} />
						</TouchableOpacity>
						<TouchableOpacity
							style={{ marginRight: 8 }}
							onPress={() => {
								this.setState({
									overlayVisible: !this.state.overlayVisible,
									modalType: "challenge",
								});
							}}
						>
							<Icon name="send" style={{ color: "#147efb" }} />
						</TouchableOpacity>
						{/* <TouchableOpacity onPress={() => {}}>
							<Icon
								type="MaterialCommunityIcons"
								name="shield-check"
								style={{ color: "#147efb" }}
							/>
						</TouchableOpacity> */}
					</Right>
				</Header>
				<Modal
					transparent
					animationType="slide"
					visible={this.state.overlayVisible}
				>
					<TouchableOpacity
						activeOpacity={1}
						style={{
							flex: 1,
							justifyContent: "center",
							alignItems: "center",
						}}
						onPress={() => this.setState({ overlayVisible: false })}
					>
						<View
							style={{
								margin: 20,
								padding: 35,
								backgroundColor: "white",
								borderColor: "#147efb",
								borderWidth: 3,
								borderRadius: 30,
								width: width - 50,
							}}
						>
							<Header
								style={{
									backgroundColor: "white",
									marginTop: -30,
									borderBottomWidth: 1,
									borderBottomColor: myGray,
								}}
							>
								<Body style={{ alignItems: "center" }}>
									{this.state.modalType === "accomplishment" && (
										<Text>Post an Accomplishment</Text>
									)}
									{this.state.modalType === "challenge" && (
										<Text>Post a Challenge</Text>
									)}
								</Body>
							</Header>
							<View style={{ paddingTop: 20 }}>
								<Form>
									{this.state.modalType === "challenge" && (
										<Item
											rounded
											style={{ borderColor: "black", marginBottom: 20 }}
										>
											<Input
												autoCapitalize="words"
												keyboardAppearance="dark"
												style={{
													marginRight: 20,
													marginLeft: 20,
												}}
												placeholderTextColor={myGray}
												placeholder={"To: (name) "}
												value={this.state.text}
												onChangeText={(text) => this.setState({ text })}
											/>
										</Item>
									)}
									<Item rounded style={{ borderColor: "black" }}>
										<Textarea
											autoCapitalize="words"
											keyboardAppearance="dark"
											style={{
												marginRight: 20,
												marginLeft: 20,
											}}
											rowSpan={4}
											placeholderTextColor={myGray}
											autoCorrect={false}
											placeholder={
												this.state.modalType === "accomplishment"
													? "Eg: Today I advertised to my friend"
													: this.state.modalType === "challenge"
													? "Eg: I challenge you to advertise to a friend"
													: ""
											}
											value={this.state.text}
											onChangeText={(text) => this.setState({ text })}
										/>
									</Item>
								</Form>
							</View>
							<View
								style={{
									alignItems: "center",
									marginTop: 10,
									left: (width * 1) / 4,
								}}
							>
								<Button rounded onPress={() => {}}>
									<Text>Post</Text>
								</Button>
							</View>
						</View>
					</TouchableOpacity>
				</Modal>
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
						isMe={true}
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
							width: 50,
							flex: 1,
							left: 20,
						}}
					>
						<Icon style={{ color: "green" }} type="Ionicons" name="send" />
						{/* {this.props.isMe && (
							<TouchableOpacity
								style={{ justifyContent: "center", alignItems: "center" }}
							>
								<Icon
									style={{ color: myBlue, marginTop: 10 }}
									type="Ionicons"
									name="checkmark-circle"
								/>
								<Text style={{ width: 40, right: 5 }} numberOfLines={1}>
									Done
								</Text>
							</TouchableOpacity>
						)} */}
					</View>
				</CardItem>
				<CardItem>
					<Body>
						<Text>{`${text}`}</Text>
					</Body>
				</CardItem>
				{this.props.isMe && (
					<CardItem footer>
						<TouchableOpacity
							style={{
								justifyContent: "center",
								alignItems: "center",
								flex: 1,
							}}
						>
							<Icon
								style={{ color: myBlue, marginTop: 10 }}
								type="Ionicons"
								name="checkmark-circle"
							/>
							<Text numberOfLines={1}>Mark as Done</Text>
						</TouchableOpacity>
					</CardItem>
				)}
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

/*
blue: #147efb
green: #008000
gray: #808080
*/
