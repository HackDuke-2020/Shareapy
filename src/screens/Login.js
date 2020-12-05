import React, { Component } from "react";
import { View, StyleSheet, Dimensions, LogBox, TextInput } from "react-native";
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
import { login } from "../redux/actions/auth";
import { connect } from "react-redux";
LogBox.ignoreLogs([
	"currentlyFocusedField is deprecated and will be removed in a future release. Use currentlyFocusedInput",
]);

class Login extends Component {
	state = {
		email: "",
		password: "",
	};

	resetState() {
		this.setState({ email: "", password: "" });
	}

	render() {
		const { width, height } = Dimensions.get("window");
		const { email, password } = this.state;

		return (
			<Container>
				<Header>
					<Body>
						<Title>Login</Title>
					</Body>
				</Header>
				<Content contentContainerStyle={styles.container}>
					<Form style={{ width, padding: 10 }}>
						<Item rounded style={{ borderColor: "gray", margin: 5 }}>
							<Icon name="md-mail" />
							<Input
								placeholder="Email"
								autoCapitalize="none"
								keyboardType="email-address"
								value={email}
								onChangeText={(email) => this.setState({ email })}
							/>
						</Item>
						<Item rounded style={{ borderColor: "gray", margin: 5 }}>
							<Icon name="md-key" />
							<Input
								placeholder="Password"
								autoCapitalize="none"
								secureTextEntry
								value={password}
								onChangeText={(password) => this.setState({ password })}
							/>
						</Item>
					</Form>
					<View style={{ alignItems: "center", margin: 5 }}>
						<Button
							rounded
							onPress={() => {
								this.props.login(email, password);
							}}
						>
							<Text>Log In</Text>
						</Button>
					</View>
					<View style={{ alignItems: "center", margin: 5 }}>
						<Button
							rounded
							transparent
							onPress={() => {
								this.props.navigation.navigate("Signup");
								this.resetState();
							}}
						>
							<Text>Don't have an account? Sign Up</Text>
						</Button>
					</View>
				</Content>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	loginError: state.errors.loginError,
});

const mapDispatchToProps = (dispatch) => ({
	login: (email, password) => dispatch(login(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
