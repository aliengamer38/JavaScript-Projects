import React, {Component, useState, useEffect } from "react"
import Classes from "./User.css"
import Wrapper from "./Wrapper"


class User extends Component {
    fieldNames = ["id", "name", "desc"];
    state = {
        counter: 0
    };
        
    shouldComponentUpdate(nextProps, nextState) {        
        console.log("[User.js] shouldComponentUpdate");
        console.log(this.props.user === nextProps.user);
        return this.props.user !== nextProps.user ? true : false;        
    }   
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[User.js] getSnapshotBeforeUpdate");
        return { message: "Snapshot" };
    }
    componentDidUpdate() {
        console.log("[User.js] componentDidUpdate");
    }    
    render() {
        console.log("[User.js] Rendering...");                       
        const renderView = this.fieldNames.map((f, i) => {
            return (
                <div className={Classes.Input} key={i}>
                    <label htmlFor={f}>{this.props.user[f]}</label>
                    <input data-field={f} type="text" id={f} onChange={this.props.changeField} />
                </div>
            )
        });
        return renderView;                                          
    }
}

export default Wrapper(User, Classes.Inputs);