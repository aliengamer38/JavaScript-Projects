import React, { Component } from "react"
import classes from "./User.css"
import "./User.css"
import { withRouter } from "react-router-dom"

class User extends Component {
    componentDidMount() {
        console.log("USER componentDidMount")

    }
    componentWillUnmount() {
        console.log("USER componentWillUnmount")
    }
    render() {        
        console.log("USER render")
        console.log(this.props);
        return (
            <li className={classes.User}>
                <a href={`/users/${this.props.user.id}`}>{this.props.user.name}</a>
            </li>
        )
    }
}

export default withRouter(User);