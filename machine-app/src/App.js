import React, { Component, Fragment } from 'react';
import User from "./User/User"
import './App.css';
import Games from "./Game/Games"
import Laptop from "./Laptop/Laptop"
import shouldDisplay from "./Utility/shouldDisplay"
import Auth from "./Auth/Auth"
import Login from "./Auth/Login"
import { Route, Redirect, Switch } from "react-router-dom"
import Account from "./Account/Account"
import Counter from "./Counter/Counter"
import Finance from "./Finance/Finance"
import getMessage from "./Message/getMessage"
import * as messageTypes from "./Message/messageType"
import Message from "./Message/Message"
import Work from "./Work/Work"
import * as actionTypes from "./store/action/actionTypes" 
import { connect } from "react-redux"

const Authentication = shouldDisplay(Auth);
const SuccessMessage = getMessage(messageTypes.SUCCESS_CODE, Message);
const ErrorMessage = getMessage(messageTypes.ERROR_CODE, Message)

class App extends Component {	
	displayText = () => {
		alert("You Win!")
	}	
	componentDidMount() {
		this.props.initializeUser();
	}
	render() {		
		console.log("APP render")		
		return (
			<div style={{ textAlign: "center" }}>
				{/* <Redirect to="/auth"/> */}
				<Switch>					
					<Route path="/auth/success" component={SuccessMessage}/>
					<Route path="/auth" component={Authentication} />
					<Route path="/account" component={Account}/>
					<Route path="/work" component={Work}/>
					<Route path="/" exact component={Finance} />
					<Route path="/" component={ErrorMessage} />
				</Switch>				
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		initializeUser: () => { dispatch({ type: actionTypes.INITIALIZE_USER }) }	
	}
}

export default connect(null, mapDispatchToProps)(App);
