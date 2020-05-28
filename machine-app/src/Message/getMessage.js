import React, { Component } from "react"
import * as messageType from "./messageType"

const getMessage = (msgType, Com) => {
    let message;
    switch (msgType) {
        case messageType.SUCCESS_CODE:
            message = messageType.SUCCESS_MESSAGE;
            break;
        case messageType.ERROR_CODE:
            message = messageType.ERROR_MESSAGE;
            break;
        default:
            message = messageType.DEFAULT_MESSAGE
            break;
        
    }
    return class Message extends Component {
        render() {
            return (
                <Com message={message}/>
            )
        }
    }
}

export default getMessage;