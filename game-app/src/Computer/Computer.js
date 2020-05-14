import React, { Component } from "react"
import classes from "./Computer.css"
import AuthContext from "../Utility/auth-context"
import Wrapper from "../Utility/Wrapper"
class Computer extends Component {
    fieldNames = ["name", "specs", "job"]
    fieldRefs = {}
    constructor(props) {
        super(props);
        this.fieldNames.map(f => {
            this.fieldRefs[f] = React.createRef();
            return null;
        })
    }
    static contextType = AuthContext;
    render() {      
        const inputs = this.fieldNames.map(f => {
            return <input type="text" onChange={e => {
                this.context.inputChange(e, {
                    computer: this.props.computer,
                    fieldName: f
                })
            }} ref={this.fieldRefs[f]} value={this.props.computer[f].value}/>
        })        
        return (
            <div className={classes.Computer}>                
                {this.props.computer.isEditable ?
                    (                        
                        <Wrapper>                            
                            {inputs}
                        </Wrapper>                        
                    ) :
                    (
                        <Wrapper>
                            <span>[{this.props.computer.name.value}]</span>
                            <span>{this.props.computer.specs.value}</span>
                            <span>--{this.props.computer.job.value}</span>
                        </Wrapper>
                    )
                }
                <button onClick={e => this.context.editComputer(e, {
                        computer: this.props.computer, inputFields: {
                            name: this.fieldRefs["name"],
                            specs: this.fieldRefs["specs"],
                            job: this.fieldRefs["job"]
                    } })}>Edit</button>
                <button onClick={e => this.context.saveComputer(e, {
                    computer: this.props.computer                
                })}>Save</button>
                <button onClick={e => this.context.deleteComputer(e, {
                    computer: this.props.computer
                })} style={{
                    padding: "0rem 0.1rem"}}>
                    &times;
                </button>                    
            </div>
        )
    }
}

export default Computer;