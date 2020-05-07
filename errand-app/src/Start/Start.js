import React, {Component} from "react"
import Computer from "../Computer/Computer"

class Start extends Component {
    constructor(props) {
        super(props);
        console.log("START constructor")
    }
    state = {
        comps: [{name: "MSI"}, {name: "Dell"}]
    }
    componentDidMount() {
        console.log("START componentDidMount");
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("START getSnapshotBeforeUpdate")
        return null;
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("START shouldComponentUpdate")
        return true;
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("START componentDidUpdate")
    }    
    static getDerivedStateFromProps(props, state) {
        console.log("START getDerivedStateFromProps")
        return null;
        
    }
    updateName = (e, obj) => {
        const fieldValue = obj.nameField.current.value;
        const newComps = [...this.state.comps];
        const compIndex = newComps.findIndex(c => {
            return c.name === obj.comp.name;
        })
        const newComp = { ...newComps[compIndex] }
        newComp.name = fieldValue;
        newComps[compIndex] = newComp;
        this.setState({ comps: newComps });

    }
    render() {
        console.log("START render")
        return (
            <div style={{textAlign: "center", marginTop: "1rem"}}>
                {this.state.comps.map((c, i) => {
                    return <Computer comp={c} key={i}
                        updateName={this.updateName}/>
                })}                
            </div>
        )
    }
}

export default Start;