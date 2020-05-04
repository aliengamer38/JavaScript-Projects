import React, {Component, useState} from "react"

class Computer extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps)
        console.log(this.props)
        console.log(nextProps === this.props)
        console.log(nextProps.desc === this.props.desc)
        return true;
    }
    render() {
        return (
            <div>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}

export default Computer;