import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Join from "./components/join/Join";
import Chat from "./components/chat/Chat";

const App = (props) => {
	return (
		<BrowserRouter>
			<Route path="/join" exact component={Join} clicked={props.clicked} />
			<Route path="/chat" exact component={Chat} />
		</BrowserRouter>
	);
};

export default App;
