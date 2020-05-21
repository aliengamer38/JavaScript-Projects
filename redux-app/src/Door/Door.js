import React, { Component } from "react"

class Door extends Component {   
    
    componentDidMount() {
        // this.setState({isAuthenticated: false})
        console.log("DOOR componentDidMount")
        this.setState({isAlreadyMounted: true})
    }
    componentDidUpdate() {
        console.log("DOOR componentDidUpdate")
        if (this.isAlreadyMounted) {

        }
    }
    componentWillUnmount() {
        console.log("DOOR componentWillUnmount")
    }
    authenticate = (e) => {
        if (!this.state.isAuthenticated) {
            this.setState({isAuthenticated: true})
        }
    }
    unautheticate = (e) => {
        if (this.state.isAuthenticated) {
            this.setState({isAuthenticated: false})
        }
    }
    
    render() {
        console.log("DOOR render")
        return (
            <div>
                <p>{this.props.name}</p>
                {this.state.isAuthenticated ? "Authenticated" : "Not Authenticated"}
                <button onClick={this.authenticate}>Authenticate</button>
                <button onClick={this.unautheticate}>Unauthenticate</button>
                <button onClick={this.props.deleteItem}>Delete</button>
            </div>
        )
    }
}

export default Door;