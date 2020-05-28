import React, { Component } from "react"

class Display extends Component {
    componentDidMount() {
        console.log(this.props.children)
    }
    render() {
        return (
            <div>
                <p>{this.props.children ? this.props.children : "No Child"}</p>                
                {/* <p>Note</p> */}
            </div>
        )
    }
}

export default Display