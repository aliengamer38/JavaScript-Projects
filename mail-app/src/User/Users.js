import React, { Component, Fragment } from 'react';
import User from "./User"
import classes from "./Users.css"
import { BrowserRouter, Route, Link} from 'react-router-dom';
import Detailed from './Detailed';
import Customer from "../Customer/Customer"

class Users extends Component {
    state = {
        message: "NEW"
    }
    render() {        
        return (
            <BrowserRouter>
                <Route path="/" exact render={() => {
                    return (
                        <div>   
                            <Customer desc="Car"/>
                        </div>
                    )

                }}/>    
                <Route path="/users" exact render={
                    () => (
                        <Fragment>
                            <ul className={classes.Users}>
                                {this.props.users.map(u => {
                                    return (<User user={u} />)
                                })}                                
                            </ul>
                            <Link to="/">Home</Link>
                            <button onClick={e => {
                                this.setState({ message: "MODIFIED" });
                            }}>Click Me</button>
                            <Link to="/users">Reload</Link>
                        </Fragment>
                    )}/>                                       
                {this.props.users.map(u => {
                    return <Route path={`/users/${u.id}`} exact
                        render={() => (
                            <Detailed user={u}/>
                        )} />
                })}                
            </BrowserRouter>
        )
    }
}

export default Users;