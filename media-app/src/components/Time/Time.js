import React, { Component } from "react"


class Time extends Component {
    render() {
        console.log("TIME render")
        return (
            <div>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default Time;