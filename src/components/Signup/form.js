import { Component } from "react";
import {
	FormContainer,
	Steps,
	Step,
	Message,
	InputContainer,
	InputWrapper,
	InputField,
	Eye,
	Next,
	NextSVG,
} from "./styled";
import arrow from "../../images/arrow.svg";
import right from "../../images/right.svg";
import "./Signup.css";
import "font-awesome/css/font-awesome.min.css";
// import "./Signup.scss"

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			first_message: "What's your name?",
			second_message: '',
			third_message: '',
			first_name: '',
			last_name: '',
			username: '',
			email: '',
			password: '',
			confirm: '',
			first_name_error: false,
			last_name_error: false,
			username_error: false,
			email_error: false,
			password_error: false,
			confirm_error: false,
			type1: 'password',
			type2: 'password',
			button: 'Next',
			icon: arrow
		};
	}

	componentDidMount() {
		// function to set the first next event
		document.getElementById("next").onclick = this.completeStepOne;
	}

	// functions to update the state while writing
	updateFirstName = (e) => {
		e.target.classList.remove('is-invalid')
		e.target.classList.add('is-valid')
		this.setState({
			...this.state,
			first_name: e.target.value,
			first_name_error: false,
			second_message: `Hi ${e.target.value} 👋`,
		});
	};
	updateLastName = (e) => {
		e.target.classList.remove('is-invalid')
		e.target.classList.add('is-valid')
		this.setState({
			...this.state,
			last_name: e.target.value,
			last_name_error: false,
		});
	};
	updateEmail = async (e) => {
		this.setState({ ...this.state, email: e.target.value });
		const response = await fetch(
			"https://stalker-rat-test.herokuapp.com/api/validate_email/?email=" +
			e.target.value
		);
		if (response.ok) {
			e.target.classList.remove('is-invalid')
			e.target.classList.add('is-valid')
			this.setState({
				...this.state,
				email_error: false,
				second_message: `Thank you, this email is valid.`,
			});
		} else {
			e.target.classList.add('is-invalid')
			const data = await response.json();
			this.setState({
				...this.state,
				email_error: true,
				second_message: data.error,
			});
		}
	};
	updateUserName = async (e) => {
		this.setState({ ...this.state, username: e.target.value });
		var response = await fetch(
			"https://stalker-rat-test.herokuapp.com/api/validate_username/?username=" +
			e.target.value
		);
		if (response.ok) {
			e.target.classList.remove('is-invalid')
			e.target.classList.add('is-valid')
			this.setState({
				...this.state,
				username_error: false,
				second_message: `Yaay ! you found a username. 🎉`,
			});
		} else {
			e.target.classList.add('is-invalid')
			const data = await response.json();
			this.setState({
				...this.state,
				username_error: true,
				second_message: data.error,
			});
		}
	};
	updatePassword = (e) => {
		this.setState({
			...this.state,
			password: e.target.value,
			password_error: false,
		});
	};
	updateConfirm = (e) => {
		this.setState({
			...this.state,
			confirm: e.target.value,
			confirm_error: false,
		});
	};

	// function on clicking first next
	completeStepOne = (e) => {
		// validating the inputs
		const first_inp = document.querySelector("#steps #step-one div > input");
		const last_inp = document.querySelector(
			"#steps #step-one div:nth-child(2) > input"
		);
		let will_return = false;
		if (last_inp.value === "") {
			last_inp.classList.add('is-invalid')
			this.setState({ ...this.state, last_name_error: true });
			will_return = true;
			setTimeout(() => {
				last_inp.focus();
			}, 300);
		} else {
			this.setState({ ...this.state, last_name_error: false });
		}
		if (first_inp.value === "") {
			first_inp.classList.add('is-invalid')
			this.setState({ ...this.state, first_name_error: true });
			will_return = true;
			setTimeout(() => {
				first_inp.focus();
			}, 300);
		} else {
			this.setState({ ...this.state, first_name_error: false });
		}

		if (will_return) {
			this.setState({
				...this.state,
				first_message: "Please tell me your name 😅",
			});
			return;
		} else {
			setTimeout(() => {
				last_inp.focus();
			}, 300);
		}

		// the animation
		document.getElementById("step-one").classList.add("hidden");
		document.getElementById("step-two").classList.remove("hidden");
		document.getElementById("back").classList.remove("hidden");
		document.getElementById("steps").classList.add("step-two");
		document.getElementById("next").onclick = this.completeStepTwo;
		document.getElementById("back").onclick = this.backToStepOne;
		// to keep the keyboard opened on modile devices
		setTimeout(() => {
			document.querySelector("#steps #step-two input").focus();
		}, 300);
	};

	backToStepOne = (e) => {
		document.querySelector("#steps #step-two input").focus();

		document.getElementById("step-one").classList.remove("hidden");
		document.getElementById("step-two").classList.add("hidden");
		document.getElementById("steps").classList.remove("step-two");
		document.getElementById("back").classList.add("hidden");
		document.getElementById("next").onclick = this.completeStepOne;

		setTimeout(() => {
			document.querySelector("#steps #step-one input").focus();
		}, 300);
	};

	completeStepTwo = (e) => {
		const username_inp = document.querySelector("#steps #step-two div > input");
		const email_inp = document.querySelector(
			"#steps #step-two div:nth-child(2) > input"
		);
		let will_return = false;
		if (email_inp.value === "") {

			email_inp.classList.add('is-invalid')
			// email_inp.classList.remove('is-valid')
			this.setState({ ...this.state, email_error: true });
			email_inp.focus();
			will_return = true;
		} else {
			this.setState({ ...this.state, email_error: false });
			email_inp.classList.remove('is-invalid')
			email_inp.classList.add('is-valid')
		}
		if (username_inp.value === "") {
			username_inp.classList.add('is-invalid')
			this.setState({ ...this.state, username_error: true });
			username_inp.focus();
			will_return = true;
		} else {
			this.setState({ ...this.state, username_error: false });
			username_inp.classList.remove('is-invalid')
			username_inp.classList.add('is-valid')
		}
		if (will_return) {
			this.setState({
				...this.state,
				second_message: "Sorry for annoying you, but we need these info 🙏",
			});
			return;
		} else {
			username_inp.focus();
		}

		document.getElementById("step-two").classList.add("hidden");
		document.getElementById("step-three").classList.remove("hidden");
		document.getElementById("steps").classList.remove("step-two");
		document.getElementById("steps").classList.add("step-three");
		document.getElementById("back").onclick = this.backToStepTwo;
		document.getElementById("next").onclick = this.completeStepThree;
		this.setState({ ...this.state, button: "Done", icon: right });
		setTimeout(() => {
			document.querySelector("#steps #step-three input").focus();
		}, 300);
	};

	backToStepTwo = (e) => {
		document.querySelector("#steps #step-three input").focus();
		document.getElementById("step-two").classList.remove("hidden");
		document.getElementById("step-three").classList.add("hidden");
		document.getElementById("steps").classList.add("step-two");
		document.getElementById("steps").classList.remove("step-three");
		document.getElementById("back").onclick = this.backToStepOne;
		document.getElementById("next").onclick = this.completeStepTwo;
		this.setState({ ...this.state, button: "Next", icon: arrow });
		setTimeout(() => {
			document.querySelector("#steps #step-two input").focus();
		}, 300);
	};

	// handling the show/hide for passwords
	showHide = (e, n) => {
		if (n === 1) {
			if (this.state.type1 === "text") {
				this.setState({ ...this.state, type1: "password" });
				e.target.classList.add("fa-eye-slash");
				e.target.classList.remove("fa-eye");
			} else {
				this.setState({ ...this.state, type1: "text" });
				e.target.classList.remove("fa-eye-slash");
				e.target.classList.add("fa-eye");
			}
			document.querySelector("#steps #step-three input").focus();
		} else {
			if (this.state.type2 === "text") {
				this.setState({ ...this.state, type2: "password" });
				e.target.classList.add("fa-eye-slash");
				e.target.classList.remove("fa-eye");
			} else {
				this.setState({ ...this.state, type2: "text" });
				e.target.classList.remove("fa-eye-slash");
				e.target.classList.add("fa-eye");
			}
			document
				.querySelector("#steps #step-three div:nth-child(2) > input")
				.focus();
		}
	};

	render() {
		return (
			<FormContainer>
				<Steps id="steps" className="animate">
					<Step className="animate active" id="step-one">
						<Message>{this.state.first_message}</Message>
						<InputContainer>

							<InputWrapper className="form-floating">
								<InputField
									error={this.state.first_name_error}
									type="text"
									className="form-control"
									id="floatingFirstname"
									placeholder="First Name"
									value={this.state.first_name}
									onInput={this.updateFirstName}
								></InputField>
								<label htmlFor="floatingFirstname" style={{ color: "white" }}>First Name</label>
							</InputWrapper>

							<InputWrapper className="form-floating">
								<InputField
									error={this.state.last_name_error}
									type="text"
									className="form-control"
									id="floatingLastname"
									placeholder="Last Name"
									value={this.state.last_name}
									onInput={this.updateLastName}
								></InputField>
								<label htmlFor="floatingLastname" style={{ color: "white" }}>Last Name</label>
							</InputWrapper>

						</InputContainer>
					</Step>
					<Step className="animate hidden" id="step-two">
						<Message>{this.state.second_message}</Message>
						<InputContainer>

							<InputWrapper full bottom className="form-floating">
								<InputField
									error={this.state.username_error}
									type="text"
									className="form-control"
									id="floatingUsername"
									placeholder="Username"
									value={this.state.username}
									onInput={this.updateUserName}
								></InputField>
								<label htmlFor="floatingUsername" style={{ color: "white" }}>Username</label>
							</InputWrapper>

							<InputWrapper full bottom className="form-floating">
								<InputField
									error={this.state.email_error}
									type="email"
									className="form-control"
									id="floatingEmail"
									placeholder="name@example.com"
									value={this.state.email}
									onInput={this.updateEmail}
								></InputField>
								<label htmlFor="floatingEmail" style={{ color: "white" }}>Email address</label>
							</InputWrapper>

						</InputContainer>
					</Step>
					<Step className="animate hidden" id="step-three">
						<Message>Last Step! Enter a strong password 🔐</Message>
						<InputContainer>

							<InputWrapper full className="form-floating">
								<InputField
									className="form-control"
									style={{ paddingRight: "50px" }}
									placeholder="Password"
									type={this.state.type1}
									value={this.state.password}
									onInput={this.updatePassword}
									id="floatingPassword"
								></InputField>
								<label htmlFor="floatingPassword" style={{ color: "white" }}>Password</label>
								<Eye
									className="fa fa-eye-slash"
									onClick={(e) => this.showHide(e, 1)}
								></Eye>
							</InputWrapper>

							<InputWrapper full bottom className="form-floating">
								<InputField
									className="form-control"
									style={{ paddingRight: "50px" }}
									bottom
									placeholder="Confirm"
									type={this.state.type2}
									value={this.state.confirm}
									onInput={this.updateConfirm}
									id="floatingCongirm"
								></InputField>
								<label htmlFor="floatingCongirm" style={{ color: "white" }}>Confirm</label>
								<Eye
									className="fa fa-eye-slash"
									onClick={(e) => this.showHide(e, 2)}
								></Eye>
							</InputWrapper>
						</InputContainer>
					</Step>
				</Steps>
				<Next back className="hidden animate" id="back">
					<NextSVG src={arrow} alt="arrows" />
				</Next>
				<Next id="next">
					{this.state.button}
					<NextSVG src={this.state.icon} alt="arrows" />
				</Next>
			</FormContainer>
		);
	}
}
