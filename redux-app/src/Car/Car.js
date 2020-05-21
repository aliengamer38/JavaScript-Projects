import React, { Component } from "react"
import CarDetails from "./CarDetails"

class Car extends Component {
    state = {
        car: [],
        isUpdated: true
    }
    componentDidMount() {
        this.setState({car: this.props.car})
    }
    componentDidUpdate() {
        console.log(this.props.isUpdated)
        console.log(this.state.isUpdated)
        if (this.props.isUpdated && this.state.isUpdated) {
            this.setState({ car: this.props.car })
            this.setState({isUpdated: false})
        }
        console.log("CAR componentDidUpdate")
    }
    render() {
        return (
            <div>
                <p>{this.props.title}</p>   
                <button onClick={e => this.props.deleteItem(e, this.props.title)}>Delete</button>
                <ul>
                    {this.state.car.map((c, i) => (
                        <CarDetails name={c} key={i}/>
                    ))}
                </ul>                
            </div>
        )
    }
}

export default Car