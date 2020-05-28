import React, { Component } from "react"
import { Redirect } from "react-router-dom"

class Finance extends Component {
    state = {
        isSwitch: false 
    }
    display = () => {
		this.setState({ isSwitch: true })		
    }
    componentWillUnmount() {
        console.log("FINANCE componentWillUnmount")
        console.log(this.state.isSwitch)
    }
    render() {
        return (
            <div>
                <p>Home Page</p>
                <button onClick={this.display}>Display Counter</button>
                {this.state.isSwitch ? <Redirect to="/counter"/> : null}
            </div>
        )
    }
}

export default Finance;