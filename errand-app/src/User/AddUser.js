import React, { Component, Fragment } from "react"
import Classes from "./User.css";
import Wrapper from "../Utility/Wrapper";
import {getCapitalization} from "../Utility/utility"


class AddUser extends Component {
    constructor(props) {
        super(props);
        this.fieldNames.map((f, i) => {
            this.fields[f] = React.createRef();
            return null;
        })        
    }    
    fields =  {}
    fieldNames = ["id", "name", "desc", "password", "repeat"];
    changeField = (e, f) => {
        this.fields[f].current.value = e.target.value;
    }
    render() {
        return (
            <Fragment>
                <p>Add Item</p>
                {this.fieldNames.map((f, i) => {                 
                    return (
                        <div className={Classes.Input} key={i}>
                            <label htmlFor={`add${getCapitalization(f)}`}>{getCapitalization(f)}:</label>
                            <input type={((f !== "repeat") && (f !== "password")) ? "text" : "password"}
                                id={`add${getCapitalization(f)}`}
                                ref={this.fields[f]} onChange={e => this.changeField(e, f)}/> 
                        </div>
                    )
                })}
                <button className={Classes.Special} onClick={e => {
                    this.props.addItem(e, { fields: this.fields})}
                }>Add Item</button>                
            </Fragment>            
        )
    }
}
export default Wrapper(AddUser, Classes.Inputs);

