import React, { Component } from "react"

class Detailed extends Component {
    render() {
        return (
            <div>
                <p>{this.props.user.id}</p>
                <p>{this.props.user.name}</p>
                <p>{this.props.user.gender}</p>
                <p>{this.props.user.job}</p>
                <p>{this.props.user.description}</p>            
                <p>{this.props.user.bio}</p>
                <p>{this.props.user.shouldDisplayBio}</p>
                <button onClick={e => { window.location = "/users" }}>Back</button>
                <button onClick={e => { window.location = "/"}}>Home</button>
            </div>
        )
    }
}

export default Detailed;