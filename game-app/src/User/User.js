import React, {Component} from "react"
import classes from "./User.css"
import axios from "axios"

class User extends Component {
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
            window.response = response;
            console.log(response);
        })
    }
    render() {
        return (
            <div className={classes.User}>

            </div>
        )
    }
}

export default User;