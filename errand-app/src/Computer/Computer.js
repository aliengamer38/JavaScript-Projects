import React, {Component, useState} from "react"

class Computer extends Component {
    constructor(props) {
        super(props);
        console.log("COMPUTER constructor");        
    }
    name = React.createRef();
    static getDerivedStateFromProps(props, state) {
        console.log("COMPUTER getDerivedStateFromProps")
        return null;
    }
    componentDidMount() {
        console.log("COMPUTER componentDidMount");        
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("COMPUTER getSnapshotBeforeUpdate");        
        return null;
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("COMPUTER componentDidUpdate");        
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("COMPUTER shouldComponentUpdate")
        return true;
    }
    render() {
        console.log("COMPUTER render")
        return (      
            <div>
                <p>{this.props.comp.name}</p>            
                <div>
                    <button style={{ padding: "0.5rem" }}
                        onClick={e => this.props.updateName(e, {nameField: this.name, comp: this.props.comp})}>Update</button>
                    <input type="text"
                        style={{ display: "block", margin: "0.5rem auto" }} ref={this.name} />
                </div>
            </div>
        )
    }
}

export default Computer;