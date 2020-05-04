import React, { useState } from 'react';
import logo from './logo.svg';
import User from "./User/User"
import Computer from "./Computer/Computer"
import "./Computer/Computer.css"
import './App.css';

const app = () => {
	// state = {
	// 	persons: [
	// 		{ name: "Max", age: 28 },
	// 		{ name: "Manu", age: 29 },
	// 		{ name: "Steph", age: 26 }
	// 	]
	// }
	// switchName = () => {
	// 	this.setState({
	// 		persons: [
	// 			{ name: "Changed", age: 28 },
	// 			{ name: "Manu", age: 29 },
	// 			{ name: "Steph", age: 26 }
	// 		]
	// 	})
	// }
	const [personsState, setPersonsState] = useState({
		persons: [
			{ name: "Max", age: 28 },
			{ name: "Manu", age: 29 },
			{ name: "Steph", age: 26 }	
		]		
	});
	const [otherState, setOtherState] = useState({
		otherState: "Some other value"
	});

	const switchName = () => {
		setPersonsState({
			persons: [
				{ name: "Changed", age: 28 },
				{ name: "Manu", age: 29 },
				{ name: "Steph", age: 26 }	
			]
		})				
	}

	const display = () => {
		console.log(personsState);
		console.log(otherState);
	}


	return (
		<div className="App text">
			<button onClick={switchName}>Click me</button>
			<button onClick={display}>Display</button>
			<User name={personsState.persons[0].name} age={personsState.persons[0].age}/>
			<User name={personsState.persons[1].name} age={personsState.persons[1].age}/>
			<User name={personsState.persons[2].name} age={personsState.persons[2].age}/>
			<div className="changed">
				<Computer/>
			</div>
		</div>
	);
}

export default app;


