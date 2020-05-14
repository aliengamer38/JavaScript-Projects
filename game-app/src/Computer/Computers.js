import React, { Component } from "react"
import classes from "./Computers.css"
import Computer from "./Computer"

class Computers extends Component {
    render() {
        return (
            <div className={classes.Computers}>
                {this.props.computers.map(comp => {
                    return <Computer computer={comp}/>
                })}
            </div>
        )
    }
}
export default Computers;