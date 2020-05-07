import React, {Component, useState, useEffect, Fragment} from "react"
import Classes from "./User.css"
import Wrapper from "../Utility/Wrapper"
import "./User.css";
import AuthContext from "../Utility/auth-context";
import { getCapitalization } from "../Utility/utility";


class User extends Component {
    constructor(props) {
        super(props);
        this.fieldNames.map((f, i) => {
            if (f !== "attmptPass") {
                this.fields[getCapitalization(f)] = React.createRef();
            }
            return null;
        })        

    }
    fieldNames = ["id", "name", "desc", "attmptPass"];    
    fields = {};
        
    shouldComponentUpdate(nextProps, nextState) {        
        return this.props.user !== nextProps.user ? true : false;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {        
    }
    componentDidUpdate() {        
    }    
    
    static contextType = AuthContext;
    render() {                        
        return (                                    
            <Fragment>
            {this.fieldNames.map((f, i) => {
                let renderDisplay;
                if (f === "attmptPass") {
                    renderDisplay = (
                        <Fragment>  
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                onChange={e => this.context.changeField(e, { user: this.props.user})}
                                value={this.props.user.attmptPass.value} ref={this.fields["Password"]}
                                disabled={this.props.user["attmptPass"].isDisabled ? "disabled" : null}
                                data-field={f}/>
                        </Fragment>
                    )
                } else {
                    renderDisplay = (
                        <Fragment>
                            <label htmlFor={f}>{this.props.user[f].value}</label>
                            <input data-field={f} disabled={this.props.user[f].isDisabled ? "disabled" : null} type="text"
                                id={f} onChange={e => this.context.changeField(e, { user: this.props.user })}
                                ref={this.fields[getCapitalization(f)]}/> 
                        </Fragment>
                    )
                }
                return (                
                    <div className={Classes.Input} key={i}>
                        {renderDisplay} 
                    </div>
                )
            })}                                         
            <div className = { Classes.Auth }>
                    <button className={Classes.Btn} onClick={e => {
                        this.context.authUser(e, {
                            user: this.props.user,
                            fields: this.fields
                        })}}
                        disabled={this.props.user.authBtn.isDisabled ? "disabled" : null}>
                        Authenticate
                    </button>
                <p className={`${Classes.AuthMsg} ${this.props.user.isAuth.value ? Classes.Valid : Classes.Invalid}`}>{this.props.user.isAuth.value
                    ? "Verified" : "Not Verified"}</p>
            </div>       
            <div className={Classes.Modify}>
                <button className={Classes.Btn}                                        
                    disabled={this.props.user.displayBtn.isDisabled ? "disabled" : null}
                    onClick={e => {this.context.displayItem(e, {user: this.props.user})}}>
                        Display
                </button>
                <button className={Classes.Btn}
                    disabled={this.props.user.deleteBtn.isDisabled ? "disabled" : null}                    
                    onClick={e => { this.context.deleteItem(e, { user: this.props.user }) }}>
                    Delete
                </button>
                    <button disabled={this.props.user.saveBtn.isDisabled ? "disabled" : null}                        
                        onClick={e => {
                            this.context.saveItem(e, { user: this.props.user, fields: this.fields})
                        }}>
                    Save
                </button>                
            </div>
        </Fragment>      
        )
    }
}

export default Wrapper(User, Classes.Inputs);