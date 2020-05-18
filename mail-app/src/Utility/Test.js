import React, { Component, Fragment } from "react"
import {Link, Route, BrowserRouter, withRouter} from "react-router-dom"
import axios from "axios"

class Test extends Component {
    getVariable = () => {
        const query = new URLSearchParams(this.props.location.search);        
        console.log(this.props.location.hash)
        console.log(this.props.location.search)
        for (let param of query.entries()) {
            return param[1];
        }
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route path="/test" exact render={() => (
                        <p>Test</p>                        
                    )}/>
                    <Route path="/" exact render={() => (
                        <p>Alternative Route</p>
                    )}/>
                    <Link to={`/var=${this.getVariable()}${this.props.location.hash}add`}>HOME</Link>
                </BrowserRouter>
            </div>                            
        )
    }
}

export default withRouter(Test);