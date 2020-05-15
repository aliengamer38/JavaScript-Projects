import React, { Component, Fragment } from "react"
import { Link, BrowserRouter, Route } from "react-router-dom"

class Customer extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <div>            
                <BrowserRouter>
                    <Link to="/users">Customer Redirect</Link>
                    <Route path="/customer" exact render={() => {
                        return (
                            <Fragment>
                                <h1>Customer not home</h1>
                                <p>Default Description</p>
                                <p>Default Meaning</p>
                            </Fragment>
                        )
                    }}/>
                    <Route path="/users" exact render={() => {
                        return <p>Another path</p>
                    }}/>
                </BrowserRouter>
            </div>
        )        
    }
}
export default Customer