import React, { Component } from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity, Image, Settings, Modal } from "react-native";
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
} from "native-base";
import { connect } from "react-redux";
import { sendMessage } from "../redux/actions/messages";

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
		const {myGray} =  "#808080";

		return (
			<Container>
				<Header>
				<Left>
						<TouchableOpacity onPress={() => {
							this.setState({
								overlayVisible: !this.state.overlayVisible,
								modalType: "Search",
						});
						}}
					>
							<Icon name="search" style={{ color: "#147efb" }}/>
							
						</TouchableOpacity>
						
					</Left>
					<Body>
						<Title>USERNAME</Title>
					</Body>
					<Right>
						<TouchableOpacity
							onPress={() => {
								this.props.navigation.navigate("Screen5");
							}}
						>
							<Icon name="trophy" style={{ color: "#147efb" }} />
						</TouchableOpacity>
					</Right>
					
				</Header>
				<Modal
					transparent
					animationType="slide"
					visible = {this.state.overlayVisible}
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
										<Text>Search for friends</Text>
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
												placeholder={"Austin_Appleseed"}
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
									left: (width * 1) / 4,
								}}
							>
								<Button rounded onPress={() => {}}>
									<Text>Search</Text>
								</Button>
							</View>
						</View>
					</TouchableOpacity>
				</Modal>
				<Content>
						<Image source ={require('../../assets/icon.png')} style={styles.profilepic}></Image>
						
				
								<Followingers/>
								<SettingsBox/>
					
					
					
					
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
						<Posts/>
					</View>
				</Content>
			</Container>
		);
	}
}
const mapStateToProps = (state) => ({
	messages: state.user.messages,
});
const mapDispatchToProps = (dispatch) => ({
	sendMessage: (message) => dispatch(sendMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Screen2);
const Posts = () =>
{	
	
		return(
			<View>
				<Text> Share your first Post!</Text>
			</View>
		)


	}
const SettingsBox = () =>{
	return(
		<View>
			<Form>
				<Item style={{ borderColor: "gray", margin: 5 }}>
							<Icon type="Ionicons" name="person" />
							<Input
								placeholder="Name"
								autoCapitalize="words"
								value=""
								onChangeText={(message) => this.setState({ message })}
							/>
						</Item>
						<Item style={{ borderColor: "gray", margin: 5 }}>
							<Icon type="Ionicons" name="person" />
							<Input
								placeholder="Username"
								autoCapitalize="words"
								value=""
								onChangeText={(message) => this.setState({ message })}
							/>
						</Item>
						<Item style={{ borderColor: "gray", margin: 5 }}>
							<Icon type="Ionicons" name="person"  />
							<Input
								placeholder="Email"
								autoCapitalize="words"
								value=""
								onChangeText={(message) => this.setState({ message })}
							/>
							</Item>
							<Item style={{ borderColor: "gray", margin: 5 }}>
							<Icon type="Ionicons" name="person" />
							<Input
								placeholder="Password"
								autoCapitalize="words"
								value=""
								onChangeText={(message) => this.setState({ message })}
							/>
							</Item>
							
					</Form>
		</View>
		
		)

}
 const Followingers = () =>{
	 return(
		 <View style={styles.follows}>
			 <Text>Followers: {"\n"} 837</Text>
			 <Text>Following:{"\n"} 292</Text>
		 </View>
	 )

 }
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	profilepic:{
		alignSelf:"center",
		width:200,
		height: 200,
		borderRadius: 100,
		overflow: "hidden",
		justifyContent: "center",
		flex: 1,
	},
	follows: {
		flexDirection: 'row',
		textAlign: 'center',
		alignSelf: "center",

		
	}
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
		
	// }

});

