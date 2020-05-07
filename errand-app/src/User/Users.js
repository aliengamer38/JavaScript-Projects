import React, {Component} from "react"
import User from "./User"
import Wrapper from "../Utility/Wrapper"
import AuthContext from "../Utility/auth-context"
class Users extends Component {
    shouldComponentUpdate(nextProps, nextState) {            
        return this.props.users !== nextProps.users ? true : false;            
    }   
    
    render() {
        return (                        
            this.props.users.map((u, i) => {
                return <User key={u.key } user={u.info}/>
            })                
        )
    }
}

export default Users;