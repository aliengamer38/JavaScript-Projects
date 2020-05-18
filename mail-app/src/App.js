import React, { Component } from 'react';
import classes from './App.css';
import Users from "./User/Users"
import { BrowserRouter, Route, Link, Switch, Redirect} from "react-router-dom"
import Detailed from './User/Detailed';
import Customer from "./Customer/Customer"
import PostData from "./Utility/PostData"
import Test from "./Utility/Test"
import Program from "./Program/Program"
import Programs from "./Program/Programs"
import AuthContext from "./Utility/AuthContext"
import Supplier from './Supplier/Supplier';
import Order from './Order/Order';

class App extends Component {
	state = {
		programs: ["Linux", "Windows", "Mac OS"],
		users: [
			{
				id: 1,
				name: "Pam",
				gender: "female",
				job: "developer",
				description: "We are the children of this world. Nobody can stop us! We will save the world from this tyranny.",
				bio: "The working time machine",
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
			},
			{
				id: 3,
				name: "Lam",
				gender: "none",
				job: "agile",
				description: "OK boomer. I do not usually respond to these morons but enough is enough for the day! I will just play dark souls.",
				bio: "OK Boom",
				shouldDisplayBio: true
			}
		]
	}
	render() {
		console.log("APP render")
		return (
			<AuthContext.Provider value={{programs: this.state.programs}}>
				<BrowserRouter basename="/myApp">					
					<Switch>
						<Route path="/uniqlo/prices" component={Order}/>						
						<Route path="/uniqlo" component={Supplier} />
					</Switch>
					<Switch>
						<Route path="/prog" component={Programs}/>
						<Route path="/prog/special" render={() => (
							<p>Special</p>
							)}/>
					</Switch>
					<Route path="/" exact render={() => (
						<div>
							<p>APP</p>
							<Link to="/users">Display Users</Link>
							<br />
							<Link to="/special/1">Display Special</Link>
							<br/>
							<Link to={{
								pathname: "/test",
								search: "?variable=5",
								hash: "uniq"
							}}>Test</Link>
							<br/>
							<Link to={{
								pathname: "/prog"
							}}>Program</Link>
						</div>
					)} />			
					
					<Route path="/users" render={() => (
						<div className={classes.Detailed}>
							<Users users={this.state.users} />
						</div>
					)} />
					{/* <Route path="/:id" exact render={() => (
						<div className={classes.Detailed}>
							<p>Overwritten</p>
						</div>
					)} /> */}
					<Route path="/special/1" render={() => (
						<div className={classes.Detailed}>
							SPECIAL
						</div>
					)} />
					<Route path="/customer" component={Customer} />
				</BrowserRouter>
			</AuthContext.Provider>
		);	
	}
};


export default App