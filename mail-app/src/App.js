import React, { Component } from 'react';
import classes from './App.css';
import Users from "./User/Users"
import { BrowserRouter, Route, Link} from "react-router-dom"
import Detailed from './User/Detailed';
import Customer from "./Customer/Customer"


class App extends Component {
	state = {
		users: [
			{
				id: 1,
				name: "Pam",
				gender: "female",
				job: "developer",
				description: "We are the children of this world. Nobody can stop us! We will save the world from this tyranny.",
				bio: "I am a working time machine",
				shouldDisplayBio: true
			},
			{
				id: 2,
				name: "Ram",
				gender: "male",
				job: "devOps",
				description: "Please do not give this guy above me attention. I believe that we are the most reasonable users in the market!",
				bio: "Notice me again",
				shouldDisplayBio: true
			}
		]
	}
	render() {
		console.log("APP render")
		return (	
			<BrowserRouter>
				<Route path="/" exact render={() => (
					<div>
						<p>APP</p>
						<Link to="/users">Display Users</Link>
						<br/>
						<Link to="/special/1">Display Special</Link>
					</div>
				)} />				
				<Route path="/users" render={() => (
					<div className={classes.Detailed}>						
						<Users users={this.state.users} />						
					</div>
				)} />
				<Route path="/:id" render={() => (
					<div className={classes.Detailed}>						
						<p>Overwritten</p>
					</div>
				)} />
				<Route path="/special/1" render={() => (
					<div className={classes.Detailed}>						
						SPECIAL
					</div>
				)} />
				<Route path="/customer" component={Customer} /	>
			</BrowserRouter>			
    	);
  	}
}

export default App;
