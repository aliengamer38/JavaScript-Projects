import React, { Component } from "react"
import Login from "../Auth/Login"

class Computer extends Component {
    render() {
        return (
            <div>
                <div>
                    <Login/>                                    
                </div>
                <p>News</p>
            </div>             
        )
    }
}

export default Computer;