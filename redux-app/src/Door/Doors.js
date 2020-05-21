import React, { Component } from "react"
import Door from "./Door"
import {connect} from "react-redux"

class Doors extends Component {    
    deleteItem = (e, i) => {
        this.props.deleteItem(i);
    }
    componentDidUpdate() {
        console.log("DOORS componentDidUpdate")
    }
    
    render() {
        console.log("DOORS render")
        return (
            <div>
                <button onClick={e => this.props.copyItem()}>Copy Item</button>
                {this.props.doors.map((d, i) => (
                    <Door deleteItem={e => this.deleteItem(e, i)}
                        name={d} />
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        doors: state.doors.doors
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (id) => { dispatch({ type: "DELETE_ITEM", id: id }) },
        copyItem: () => { dispatch({type: "COPY_ITEM"})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Doors);