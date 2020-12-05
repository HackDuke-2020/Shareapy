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
	Form,
	Item,
	Input,
} from "native-base";
import { connect } from "react-redux";
import { sendMessage } from "../redux/actions/messages";

class Screen2 extends Component {
	state = {
		message: "",
	};

	resetState() {
		this.setState({ message: "" });
	}

	render() {
		const { width, height } = Dimensions.get("window");
		const { message } = this.state;
		const { messages } = this.props;

		return (
			<Container>
				<Header>
					<Body>
						<Title>Screen2</Title>
					</Body>
				</Header>
				<Content contentContainerStyle={styles.container}>
					<Form style={{ width, padding: 10 }}>
						<Item rounded style={{ borderColor: "gray", margin: 5 }}>
							<Icon type="Ionicons" name="document" />
							<Input
								placeholder="Message"
								autoCapitalize="words"
								value={message}
								onChangeText={(message) => this.setState({ message })}
							/>
						</Item>
					</Form>
					<View style={{ alignItems: "center", margin: 5 }}>
						<Button
							rounded
							onPress={() => {
								this.props.sendMessage(message);
								this.resetState();
							}}
						>
							<Text>Save Data</Text>
						</Button>
					</View>
					<List>
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
					</List>
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
