import React, { Component } from "react"
import { Link, Route } from "react-router-dom"
import asyncImportComponent from "./utilities/hoc/asyncImportComponent"
import componentWithProps from "./utilities/hoc/componentWithProps"

let Pizza = asyncImportComponent(import("./containers/Pizza/Pizza"))    
let User = asyncImportComponent(import("./containers/User/User"))

Pizza = componentWithProps(Pizza)

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/user">To User</Link> | 
                    <Link to="/pizza">To Pizza</Link>
                </div>
                <div>
                    <Route path="/user" component={User} />
                    <Route path="/pizza" component={Pizza} />                    
                </div>
            </div>
        )
    }
}

export default App