import React, { Component } from "react"
import { connect } from "react-redux"

class User extends Component {
    state = {
        isAuthenticate: false
    }    
    authenticate = (e) => {
        this.setState({ isAuthenticate: true });        
    }
    render() {      
        return (
            <div> 
                <button onClick={this.props.authenticate}>Authenticate</button>
                <p>{this.props.name}</p>
                <p>{this.props.info}</p>

                {this.props.specs !== undefined ? <p>{this.props.specs}</p> : undefined}                                
            </div>
        )
    }
}

export default User;