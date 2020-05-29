import React, { Component } from "react"

const componentWithProps = (Com, props) => {
    return class extends Component {
        render() {
            return (
                <Com {...props}/>
            )
        }
    }
}

export default componentWithProps;