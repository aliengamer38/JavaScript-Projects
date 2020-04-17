import React, { Component } from "react";
import "./Start.css";
import Computer from "../Computer/Computer";

class Start extends Component {    
    state = {
        name: "test",
        inputVal: "default",
        inputChange: this.inputChange,
        start: "default"    
    }    
    description = "DESCRIPTION";
    inputChange(event) {
        this.setState({
            name: "test",
            inputVal: event.target.value,
            inputChange: this.inputChange,
        })
    };
    click(event) {
        this.description = "CHANGED DESCRIPTION";
    }
    render() {
        return (
            <div className="text">
                <p id="special-1">Paragraph for all</p>
                <Computer name={this.state.name}
                    description={this.description}
                    sign={this.state.sign}
                    inputVal={this.state.inputVal}
                    inputChange={this.inputChange.bind(this)}
                    start={this.state.start} 
                    click={this.click.bind(this)} />
            </div>
            
        )
    }
}

export default Start;