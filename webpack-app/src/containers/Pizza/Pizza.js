import React, { Component } from "react"
import classes from "./Pizza.css"
import PizzaImage from "../../components/PizzaImage/PizzaImage"

class Pizza extends Component {
    render() {
        return (
            <div className={classes.Pizza}>
                <h1>My Pizza</h1>
                <PizzaImage />
                <p>Name: {this.props.name}</p>
            </div>
        )
    }
}
export default Pizza;

