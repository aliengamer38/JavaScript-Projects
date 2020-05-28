import React, { Component } from "react"
import errorWrapper from "../Utility/errorWrapper"

class Laptop extends Component {
    componentDidMount() {
        console.log(this.props.children)
    }
    render() {
        return (
            <div>
                <p>Laptop</p>
            </div>
        )
    }
}

export default errorWrapper(Laptop);