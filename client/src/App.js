import React from "react";
import Intro from "./components/introduction/intro";
import App1 from "./components/chatapp/App";
import Mentor from "./components/Mentorship/Mentor";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { CubeGrid } from "styled-loaders-react";

import styles from "./App.module.css";

class App extends React.Component {
	state = {
		showChat: false,
		showMentor: false,
		toggleSidebar: false,
		loading: true,
	};

	componentDidMount = () => {
		setTimeout(() => {
			this.setState({
				loading: false,
			});
		});
	};

	chatSwitchHandler = () => {
		const showChat = this.state.showChat;
		this.setState({ showChat: !showChat });
	};

	mentorSwitchHandler = () => {
		const mentor = this.state.showMentor;
		this.setState({ showMentor: !mentor });
	};

	switchToggleHandler = () => {
		const sidebar = this.state.toggleSidebar;
		this.setState({ toggleSidebar: !sidebar });
		console.log(this.state.toggleSidebar);
	};

	render() {
		return this.state.loading ? (
			<CubeGrid color="purple" />
		) : (
			<BrowserRouter>
				<div className={styles.app}>
					{!(this.state.showChat || this.state.showMentor) ? (
						<div>
							<div
								className={styles.bgImage}
								onClick={this.switchToggleHandler}
							></div>
							<div className={styles.navItems}>
								Student's Space
								<div
									className={styles.toggleIcon}
									onClick={this.switchToggleHandler}
								>
									<div className={styles.toggleIconLine} />
									<div className={styles.toggleIconLine} />
									<div className={styles.toggleIconLine} />
								</div>
								<ul>
									<li>
										<Link to="/">Home</Link>
									</li>
									<li onClick={(e) => this.chatSwitchHandler()}>
										<Link to="/join">Chat</Link>
									</li>
									<li onClick={(e) => this.mentorSwitchHandler()}>
										<Link to="/mentor">Mentorship</Link>
									</li>
									<li>
										<Link to="/">Community</Link>
									</li>
								</ul>
							</div>
						</div>
					) : null}

					{this.state.toggleSidebar ? (
						<div className={styles.sidebar}>
							<ul>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li
									onClick={(e) => {
										this.chatSwitchHandler();
										this.switchToggleHandler();
									}}
								>
									<Link to="/join">Chat</Link>
								</li>
								<li
									onClick={(e) => {
										this.mentorSwitchHandler();
										this.switchToggleHandler();
									}}
								>
									<Link to="/mentor">Mentorship</Link>
								</li>
								<li>
									<Link to="/">Community</Link>
								</li>
							</ul>
						</div>
					) : null}
					<Switch>
						<Route path="/join">
							<App1 clicked={this.chatSwitchHandler} />
						</Route>
						<Route path="/mentor">
							<Mentor clicked={this.mentorSwitchHandler} />
						</Route>
						<Route path="/">
							<Intro />
						</Route>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
