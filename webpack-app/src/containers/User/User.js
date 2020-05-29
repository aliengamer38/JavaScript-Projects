import React, { Component } from "react"
import classes from "./User.css"

class User extends Component {
    render() {
        return (
            <div className={classes.User}>
                <h1>This User</h1>
                <p>I am a user</p>
            </div>
        )
    }
}

export default User;

