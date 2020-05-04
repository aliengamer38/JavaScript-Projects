import React, {Component} from "react"
import User from "./User"

class Users extends Component {
    shouldComponentUpdate(nextProps, nextState) {        
        console.log("[Main.js] shouldComponentUpdate");
        console.log(this.props.users)
        console.log(nextProps.users);
        console.log(this.props.users !== nextProps.users); // false
        return this.props.users !== nextProps.users ? true : false;            
    }   
    render() {
        return (
            this.props.users.map((u, i) => {
                return <User user={u} changeField={e => {this.props.changeField(e, i)}}/>
            })
        )
    }
}

export default Users;