import React, { Component } from "react"


class Login extends Component {
    static async getInitialProps(context) {
        console.log(context)    
        return {}
    }
    render() {
        return (
            <div>
                <p>Please login</p>
            </div>
        )
    }
}

export default Login;