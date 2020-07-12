import React from "react";
import Intro from "./components/introduction/intro";
import App1 from "./components/chatapp/App";
import Mentor from "./components/Mentorship/Mentor";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import styles from "./App.module.css";

class App extends React.Component {
	state = {
		showChat: false,
	};

	chatSwitchHandler = () => {
		const showChat = this.state.showChat;
		this.setState({ showChat: !showChat });
	};

	render() {
		return (
			<BrowserRouter>
				<div className={styles.app}>
					{!this.state.showChat ? (
						<div>
							<div className={styles.bgImage}></div>
							<div className={styles.navItems}>
								Student's Space
								<ul>
									<li>
										<Link to="/">Home</Link>
									</li>
									<li onClick={(e) => this.chatSwitchHandler()}>
										<Link to="/join">Chat</Link>
									</li>
									<li onClick={(e) => this.chatSwitchHandler()}>
										<Link to="/mentor">Peer Mentorship</Link>
									</li>
									<li>
										<Link to="/">Community</Link>
									</li>
								</ul>
							</div>
						</div>
					) : null}
					<Switch>
						<Route path="/join">
							<App1 clicked={this.chatSwitchHandler} />
						</Route>
						<Route path="/mentor">
							<Mentor />
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
