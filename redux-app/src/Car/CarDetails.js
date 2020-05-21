import React, { Component } from "react"

class CarDetails extends Component {        
    componentDidUpdate() {
        console.log("CARDETAILS componentDidUpdate")
    }
    render() {
        return (
            <li>{this.props.name}</li>
        )
    }
}

export default CarDetails;