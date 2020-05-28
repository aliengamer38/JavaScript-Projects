import React, { Component } from "react"

export const SIGN_UP = "signUp";
export const SIGN_IN = "signIn";

class Input extends Component {
    state = {
        fields: ["email", "password"],
        fieldValues: {},
        isSignUp: true
    }
    capitalizeWord = (word) => {
        return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
    }
    componentWillMount() {
        let fieldValues
        this.state.fields.map(f => {
            fieldValues = { ...this.state.fieldValues }
            fieldValues[f] = "";            
            return null;
        })
        this.setState({fieldValues: fieldValues})
    }
    inputChange = (e, f) => {
        const newFieldValues = { ...this.state.fieldValues };
        newFieldValues[f] = e.target.value;
        this.setState({ fieldValues: newFieldValues });        
    }
    
    render() {
        return (
            <div style={{display: "flex", flexDirection: "column", gap: "0.3rem", alignItems: "center"}}>
                {this.state.fields.map(f => {
                    return (
                        <div style={{display: "flex", flexDirection: "row", gap: "0.3rem"}}>
                            <label htmlFor={f}>{this.capitalizeWord(f)}: </label>
                            <input type={f === "email" ? "email" : "password"}
                                id={f}
                                placeholder={this.capitalizeWord(f)}
                                value={this.state.fieldValues[f]}
                                onChange={e => this.inputChange(e, f)}/>
                        </div>
                    )
                })}
                <div style={{display: "flex", flexDirection: "row", gap: "0.3rem"}}>
                    <div>
                        <label htmlFor="signUp">Sign Up</label>
                        <input type="radio" id="signUp" name="signOption"
                            value={SIGN_UP} checked={this.props.isSignUp}
                            onChange={e => this.props.radioClick(e)}/>
                    </div>
                    <div>
                        <label htmlFor="signIn">Sign In</label>
                        <input type="radio" id="signIn" name="signOption"
                            value={SIGN_IN} 
                            onChange={e => this.props.radioClick(e)} />
                    </div>
                </div>
                <button onClick={e => {
                    e.preventDefault();
                    this.props.submit(this.state.fieldValues, this.props.isSignUp);
                }}>Submit ({this.props.isSignUp ? "Sign Up" : "Sign In"})</button>
            </div>
        )
    }
}

export default Input