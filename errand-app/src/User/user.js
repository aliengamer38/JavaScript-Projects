import React, {Component, useState, useEffect } from "react"
import Classes from "./User.css"


class User extends Component {
    fieldNames = ["id", "name", "desc"];
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log("[User.js] shouldComponentUpdate");        
        console.log(nextProps);
        console.log(this.props);
        console.log(nextProps !== this.props);
        if (nextProps !== this.props) {
            return true;
        }
        return false;
    }   
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[User.js] getSnapshotBeforeUpdate");
        return { message: "Snapshot" };
    }
    componentDidUpdate() {
        console.log("[User.js] componentDidUpdate");
    }
    render() {
        return (
            <div className={Classes.Inputs}>
                {this.fieldNames.map((f, i) => {
                    return (
                        <div className={Classes.Input} key={i}>
                            <label htmlFor={f}>{this.props[f]}</label>
                            <input data-field={f} type="text" id={f} onChange={this.props.changeField} />
                        </div>
                    )
                })}
            </div>
        )        
    }
}

export default User;