import React, { Component, Fragment } from "react"
import {Link, Route, BrowserRouter, withRouter} from "react-router-dom"
import axios from "axios"

class Program extends Component {    
    constructor(props) {
        super(props);
        console.log(this.props);        
    }
    componentDidMount() {
        
    }
    clicked = (e) => {
        this.props.history.push("/prog/special");
    }
    render() {        
        return (
            <div>
                <button onClick={this.clicked}>Special</button>
            </div>                            
        )
    }
}

export default withRouter(Program);