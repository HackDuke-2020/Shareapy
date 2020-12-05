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
	Input,
	Item,
} from "native-base";
import { connect } from "react-redux";
import { signup } from "../redux/actions/auth";

class Signup extends Component {
	state = {
		name: "",
		email: "",
		password: "",
	};
	render() {
		const { width, height } = Dimensions.get("window");
		const { name, email, password } = this.state;
		return (
			<Container>
				<Header>
					<Body>
						<Title>Sign Up</Title>
					</Body>
				</Header>
				<Content contentContainerStyle={styles.container}>
					<Form style={{ width, padding: 10 }}>
						<Item rounded style={{ borderColor: "gray", margin: 5 }}>
							<Icon name="md-person" />
							<Input
								placeholder="Name"
								autoCapitalize="words"
								value={name}
								onChangeText={(name) => this.setState({ name })}
							/>
						</Item>
						<Item rounded style={{ borderColor: "gray", margin: 5 }}>
							<Icon name="md-mail" />
							<Input
								placeholder="Email"
								keyboardType="email-address"
								autoCapitalize="none"
								value={email}
								onChangeText={(email) => this.setState({ email })}
							/>
						</Item>
						<Item rounded style={{ borderColor: "gray", margin: 5 }}>
							<Icon name="md-key" />
							<Input
								placeholder="Password"
								autoCapitalize="none"
								value={password}
								secureTextEntry
								onChangeText={(password) => this.setState({ password })}
							/>
						</Item>
					</Form>
					<View style={{ alignItems: "center", margin: 5 }}>
						<Button
							rounded
							onPress={() => {
								this.props.signup(name, email, password);
							}}
						>
							<Text>Sign Up</Text>
						</Button>
					</View>
					<View style={{ alignItems: "center", margin: 5 }}>
						<Button
							rounded
							transparent
							onPress={() => {
								this.props.navigation.navigate("Login");
							}}
						>
							<Text>Already have an account? Log in </Text>
						</Button>
					</View>
				</Content>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
	signup: (name, email, password) => dispatch(signup(name, email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
