import React, { Component, Fragment } from "react"
import Display from "../Display/Display"
import { game } from "./emulate"

class Emulator extends Component {
    render() {
        let authRender = null;
        if (this.props.isAuthenticated === true) {
            authRender = <Display>TRUE</Display>
        } else if (this.props.isAuthenticated === false) {
            authRender = <Display>FALSE</Display>
        }
        return (            
            <div>
                {this.props.isEmulated ? [<Display></Display>, <Display />] : [<Display />, <Display />, <Display />]}
                <div>
                    {authRender}
                </div>
            </div>
        )
    }
}

export default Emulator;

