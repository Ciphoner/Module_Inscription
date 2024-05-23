// Filename - App.js

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./App.css";

export default class PhoneInputGfg extends React.Component {
	constructor(props) {
		super(props);
		this.state = { phone: "" };
	}
	render() {
		return (
			<div className="App">
				<h1 className="geeks">GeeksforGeeks</h1>
				<h3>Phone Number Input In React JS</h3>
				<PhoneInput
					className="number"
					country={"us"}
					value={this.state.phone}
					onChange={(phone) =>
						this.setState({ phone })
					}
				/>
			</div>
		);
	}
}
