import React from "react";
import "./App.css";
import { Functional } from "./components/Functional";
import { Jumbotron } from "reactstrap";

const App: React.FunctionComponent = () => {
	return (
		<Jumbotron fluid className="App">
			<img
				src="https://images.squarespace-cdn.com/content/v1/51fe4102e4b0c3bde0e113c1/1538591210882-DOPR17C61ILQI0PVPQB3/ke17ZwdGBToddI8pDm48kGY22ROTTSgoi3WmP4Jzc_VZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx0X75PWt5KK5MnV_PI5jz7a_83YFC0tJSBKYXP7NMB9B8yQGa0TgF-uFd2ko20bVw/New-York-Times-Logo.png"
				width="90%"
			/>
			<Jumbotron className="AppJumbo" width="70%">
				<Functional />
			</Jumbotron>
		</Jumbotron>
	);
};

export default App;
