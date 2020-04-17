import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import User from "./User/User";

class App extends Component {
	state = {
		users: [
			{ name: "MSI", description: "Laptop" },
			{ name: "MacPro", description: "Apple" },
			{ name: "Robot", description: "Technology" },
		],
		computers: [
			{ number: 101, job: "developer" },
			{ number: 102, job: "programmer" },
			{ number: 103, job: "devops" }

		]
	};

	changeName = () => {		
		const newState = [...this.state.users];

		const number = document.getElementById("number").value;
		const name = document.getElementById("name").value;
		const description = document.getElementById("description").value;
		
		if (number < newState.length) {
			newState[number].name = name;
			newState[number].description = description;
			
			this.setState({			
				users: [
					...newState
				]
			})				
		} else {
			alert("Invalid number");
		}
	}

	alertMe(number) {
		console.log(this.state.computers[number].job);
		console.log(this.state.computers[number].number);
	}

	render() {
		return (
			<div className="App">
				<h1>This is a base app</h1>
				<User name={this.state.users[0].name} description={this.state.users[0].description}/>
				<User name={this.state.users[1].name} description={this.state.users[1].description} />
				<User name={this.state.users[2].name} description={this.state.users[2].description} />
				<div>
					<input type="text" placeholder="Type number" className="input" id="number"/>
					<input type="text" placeholder="Type name" className="input" id="name"/>
					<input type="text" placeholder="Type description" className="input" id="description"/>
					<button onClick={() => this.changeName()}>
						Click Me</button>
				</div>
				<User number={this.state.computers[0].number} job={this.state.computers[0].job}
					click={this.alertMe.bind(this, 0)} />
				<User number={this.state.computers[1].number} job={this.state.computers[1].job}
					click={this.alertMe.bind(this, 1)} />
				<User number={this.state.computers[2].number} job={this.state.computers[2].job}
					click={this.alertMe.bind(this, 2)} />
			</div>
		);
	}
}

export default App;
