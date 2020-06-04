import React, { Component, Fragment } from 'react';
import classes from './App.css';
import Account from "./containers/Account/Account"
import Backdrop from "./components/Backdrop/Backdrop"
import Modal from "./components/Modal/Modal"
import Credit from "./containers/Credit/Credit"
import Transition from "react-transition-group/Transition"
import Game from "./containers/Game/Game"
import Display from "./components/Display/Display"
import Media from "./components/Media/Media"

class App extends Component {
	state = {
		status: "status"
	}
		
	changeStatus = () => {
		this.setState({status: "status"	})
	}
	render() {		
		console.log("APP render")
		return (
			<div className={classes.App}>			
				<button onClick={e => this.changeStatus()}>Change Status</button>	
				<Media status={this.state.status}/>
			</div>
		);
	}
}

export default App;
