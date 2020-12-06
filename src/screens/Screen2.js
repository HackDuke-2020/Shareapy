import React, { Component } from "react";
import {
	View,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	Image,
	Settings,
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
	Form,
	Item,
	Input,
	Card,
	CardItem,
} from "native-base";
import { connect } from "react-redux";
import { sendMessage } from "../redux/actions/messages";
import { search } from "../redux/actions/follow";
import { follow } from "../redux/actions/follow";

class Screen2 extends Component {
	state = {
		message: "",
		fabActive: false,
		overlayVisible: false,
		modalType: "",
		text: "",
	};

	resetState() {
		this.setState({ message: "" });
	}

	render() {
		const { width, height } = Dimensions.get("window");
		const { message } = this.state;
		const { messages } = this.props;
		const { myGray } = "#808080";

		return (
			<Container>
				<Header>
					<Left>
						<TouchableOpacity
							style={{ marginLeft: 15 }}
							onPress={() => {
								this.setState({
									overlayVisible: !this.state.overlayVisible,
									modalType: "Search",
								});
							}}
						>
							<Icon name="search" style={{ color: "#147efb" }} />
						</TouchableOpacity>
					</Left>
					<Body>
						<Title>{this.props.user.displayName}</Title>
					</Body>
					<Right>
						<TouchableOpacity
							style={{ marginRight: 15 }}
							onPress={() => {
								this.props.navigation.navigate("Screen5");
							}}
						>
							<Icon
								type="FontAwesome"
								name="bar-chart"
								style={{ color: "#147efb" }}
							/>
						</TouchableOpacity>
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
									{this.state.modalType === "Search" && (
										<Text>Search for Friends</Text>
									)}
								</Body>
							</Header>
							<View style={{ paddingTop: 20 }}>
								<Form>
									{this.state.modalType === "Search" && (
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
												placeholder={"Name"}
												value={this.state.text}
												onChangeText={(text) => this.setState({ text })}
											/>
										</Item>
									)}
								</Form>
							</View>
							<View
								style={{
									alignItems: "center",
									marginTop: 10,
									left: (width * 1) / 4 - 12,
								}}
							>
								<Button
									rounded
									onPress={() => {
										this.props.search(this.state.text);
									}}
								>
									<Text>Search</Text>
								</Button>
							</View>
							{this.props.searchedUser && (
								<View style={{ alignItems: "center", marginTop: 30 }}>
									<Text>{this.props.searchedUser.name}</Text>
									<View
										style={{
											alignItems: "center",
											marginTop: 10,
										}}
									>
										<Button
											rounded
											onPress={() => {
												this.props.follow(this.props.searchedUser.uid);
											}}
										>
											<Text>Follow</Text>
										</Button>
									</View>
								</View>
							)}
						</View>
					</TouchableOpacity>
				</Modal>
				<Content>
					<Image
						source={require("../../assets/profpic.jpg")}
						style={styles.profilepic}
					></Image>

					<Followingers user={this.props.user} />
					{console.log(this.props.user)}
					<SettingsBox namesake={this.props.user.displayName} emailsake = {this.props.user.email} />

					{/* <List>
						{messages &&
							messages.map((text) => (
								<View
									key={text}
									style={{
										backgroundColor: "gray",
										width,
										padding: 5,
										margin: 5,
									}}
								>
									<Text>{text}</Text>
								</View>
							))}
					</List>  */}

					<View>
						<Posts props={this.props} />
					</View>
				</Content>
			</Container>
		);
	}
}
const mapStateToProps = (state) => ({
	messages: state.user.messages,
	user: state.user,
	searchedUser: state.searchedUser,
});
const mapDispatchToProps = (dispatch) => ({
	sendMessage: (message) => dispatch(sendMessage(message)),
	search: (name) => dispatch(search(name)),
	follow: (uid) => dispatch(follow(uid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Screen2);

const Posts = ({ props }) => {
	
	return (
		<View>
			{props.user.justMyPosts && props.user.justMyPosts.length !== 0 && (
				<Text style={{ marginLeft: 20, marginTop: 40, fontSize: 30 }}>
					Your posts
				</Text>
			)}
			{props.user.justMyPosts && props.user.justMyPosts.length === 0 && (
				<Text> Share your first Post!</Text>
			)}
			{props.user.justMyPosts &&
				props.user.justMyPosts.map((obj) => {
					if (obj.type === "accomplishment") {
						return (
							<Accomplishment
								key={obj.text + obj.type + Math.random()}
								name={obj.name1}
								text={obj.text}
							/>
						);
					}
					if (obj.type === "challenge") {
						return (
							<Challenge
								makePost={props.makePost}
								key={obj.text + obj.type + Math.random()}
								name1={obj.name1}
								name2={obj.name2}
								text={obj.text}
								isMe={false}
							/>
						);
					}

					return (
						<CompletedChallenge
							key={obj.text + obj.type + Math.random()}
							name1={obj.name1}
							name2={obj.name2}
							text={obj.text}
						/>
					);
				})}
		</View>
	);
};

const SettingsBox = ({namesake, emailsake}) => {
	
	return (
		<View>
			<Card style={{
					padding: 5,
					marginLeft: 0,
					marginRight: 0,
					borderRadius: 15,
					fontWeight: 'bold',
				}}>
			<Text style= {{ borderColor: "gray", margin: 5, fontWeight: 'bold',}} ><Icon type="Ionicons" name="person" style={{ color: "#808080", }}/>		
			     {namesake} </Text>
			</Card>
			<Card style={{
					padding: 5,
					marginLeft: 0,
					marginRight: 0,
					borderRadius: 15,
				}}>
			<Text style= {{ borderColor: "gray", margin: 5, fontWeight: 'bold',}}> <Icon type="Ionicons" name="mail" style={{ color: "#808080", }} />{emailsake}</Text></Card>
	
				
			
			
		</View>
	);
};
const Followingers = ({ user }) => {
	return (
		
		<View style={{ ...styles.follows, justifyContent: "space-around" }}>
			<Card style={{flexDirection: 'row', padding: 5,
					marginLeft: 0,
					marginRight: 0,
					borderRadius: 15,}}>
			<Text style={{ marginRight: 30, fontWeight: "bold", }}>{`Followers\n${
				user.followers ? user.followers.length : 0
			}`}</Text>
			<Text style ={{fontWeight: "bold",}}>{`Following\n${user.following ? user.following.length : 0}`}</Text>
		</Card>
		</View>
		
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	profilepic: {
		alignSelf: "center",
		width: 200,
		height: 200,
		borderRadius: 100,
		overflow: "hidden",
		justifyContent: "center",
		flex: 1,
	},
	follows: {
		flexDirection: "row",
		textAlign: "center",
		alignSelf: "center",
		justifyContent: "center",
		
	},
	// name: {
	// 	textAlign: "center",
	// 	alignItems: "center",
	// 	fontSize: 30,
	// },
	// aligningtext:{
	// 	padding: 10,
	// 	backgroundColor: '#FFFFFF',
	// 	alignItems: 'center',
	// 	flexDirection: 'row',
	// 	textAlign: 'center',
	// 	padding: 130,
});

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
						<Icon style={{ color: "green" }} name="trophy" />
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
							onPress={() => {
								this.props.makePost(name1, name2, text, "completedchallenge");
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
