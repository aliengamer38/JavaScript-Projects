import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import * as actionTypes from "../store/action/actionTypes"
import { special } from "../Utility/special"

class Login extends Component {
    login = () => {
        console.log("LOGIN login")        
        console.log(this.props.isLogin)
        this.props.login();
        console.log(this.props.specialSpecs ? this.props.specialSpecs() : null)
    }

    render() {
        return (
            <div>
                <button onClick={e => this.login()}>Login</button>
                {this.props.isLogin ? <Redirect to="/"/> : null}
            </div>            
        )
    }
}

const mapStateToProps = state => {
    return {
        isLogin: state.auth.isLogin
    }
}
const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch({type: actionTypes.LOGIN})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(special(Login));