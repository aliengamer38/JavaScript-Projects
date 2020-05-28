import React, { Component } from "react"

export const componentWithProps = (Com, props) => {
    return class Box extends Component {
        render() {
            return (
                <Com {...props}/>
            )
        }
    }
    
}