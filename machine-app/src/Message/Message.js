import React, { Component } from "react"
import classes from "./Message.css"

class Message extends Component {
    render() {
        return (            
            <p>{this.props.message}</p>            
        )
    }
}

export default Message;