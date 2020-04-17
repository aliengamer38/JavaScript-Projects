import React, { Component } from "react";
import "./Computer.css";

const computer = (props) => {
	return (
		<div>
			<p>My name is {props.name}</p>
			<p className="special">{props.description}</p>
			<p id="special" laptop={props.start}>This is a note:</p>            
            <button onClick={props.click}>Click Me</button>
		</div>
	);
};

export default computer;
