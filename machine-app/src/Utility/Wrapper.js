import React, { Component } from "react"

const wrapper = (Com, props) => {
    return class extends Component {
        render() {
            return (
                <Com {...props}/>
            )
        }
    }
}

export default wrapper