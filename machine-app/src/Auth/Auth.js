import React, { Component } from "react"
import axios from "axios"
import Input, { SIGN_IN, SIGN_UP } from "../Input/Input"
import { connect } from "react-redux"
import { Redirect } from "react-router";
import * as actionTypes from "../store/action/actionTypes"

const APIID = "AIzaSyBXOw7Sxrz92ruEDW_COd1AtBnXlDL14RA";
const SignUpAPI = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIID}`
const SignInAPI = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIID}`

class Auth extends Component {
    state = {
        loading: null,
        message: "Success!",
        email: "",
        username: "",
        isSignUp: true,
        isSignIn: false,        
    }
    radioClick = (e) => {
        switch (e.target.value) {
            case SIGN_IN:
                this.setState({ isSignUp: false });
                console.log(e.target.value)
                break;
            case SIGN_UP:
                this.setState({ isSignUp: true });
                break;
            default:
                break;
        }
    }
    SignUp = (email, password, signOptions) => {
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }   
        let signOptionsAPI;
        if (signOptions === SIGN_IN) {
            signOptionsAPI = SignInAPI
        } else {
            signOptionsAPI = SignUpAPI;
        }
        axios.post(signOptionsAPI, authData).then(res => {

            console.dir(res.data);
            this.setState({ message: "Success!", loading: false })            
            if (signOptions === SIGN_IN) {
                setTimeout(() => {
                    this.setState({ isSignIn: true })
                    this.props.authenticate();
                    setTimeout(() => {
                        console.log(this)
                        this.props.history.push("/account");
                        console.log("redirected")
                    }, 2000)
                }, 500)
            }
        }).catch(err => {
            window.err = err;
            console.dir(err);            
            this.setState({ message: "Failed!", loading: false })            
        })
        this.setState({ loading: true });
    }
    submit = (fieldValues, isSignUp) => {
        this.SignUp(fieldValues.email, fieldValues.password, isSignUp ? SIGN_UP : SIGN_IN);
    }
    componentDidMount() {
        
    }
    render() {
        let loading;
        if (this.state.loading === true) {
            loading = <p>Loading...</p>
        } else if (this.state.loading === false) {
            loading = this.state.message
        }
        return (
            <React.Fragment>   
                <Input submit={this.submit} isSignUp={this.state.isSignUp} radioClick={this.radioClick}/>
                {this.state.loading !== null ? loading : null}      
                {this.state.isSignIn ? <Redirect to="/auth/success" /> : null}                
            </React.Fragment>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        authenticate: () => {dispatch({type: actionTypes.AUTHENTICATE})}
    }
}
export default connect(null, mapDispatchToProps)(Auth);