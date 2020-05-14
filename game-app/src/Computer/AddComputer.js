import React, { Component } from "react"
import classes from "./AddComputer.css"

class AddComputer extends Component {
    fieldName = ["name", "specs", "job"]
    inputRefs = {};
    constructor(props) {
        super(props);
        console.log("ADDCOMPUTER constructor")
        this.fieldName.map(f => {
            this.inputRefs[f] = React.createRef();
            return null;
        })
    }
    componentDidUpdate() {
        console.log("ADDCOMPUTER componentDidUpdate")
    }
    render() {
        console.log("ADDCOMPUTER render")
        return (
            <div className={classes.AddComputer}>
                <div className={classes.Input}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name"
                        placeholder="Please type your name..."
                        ref={this.inputRefs["name"]}/>
                </div>
                <div className={classes.Input}>
                    <label htmlFor="specs">Specs: </label>
                    <input type="text" id="specs"
                        placeholder="Please type your specs..."
                        ref={this.inputRefs["specs"]}/>
                </div>
                <div className={classes.Input}>
                    <label htmlFor="job">Job: </label>
                    <input type="text" id="job"
                        placeholder="Please type your job..."
                        ref={this.inputRefs["job"]}/>
                </div>
                <button className={classes.Btn}
                    onClick={e => this.props.addComputer(e, {
                        computer: {
                            name: this.inputRefs["name"],
                            specs: this.inputRefs["specs"],
                            job: this.inputRefs["job"]
                        }
                    })}>
                    Add Computer
                </button>
            </div>
        )
    }
}

export default AddComputer;