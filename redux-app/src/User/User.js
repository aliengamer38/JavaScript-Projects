import React, { Component } from "react"
import { connect } from "react-redux"


class User extends Component {
    render() {
        return (
            <div >
                <p>{this.props.name}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.age}</p>        
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        name: state.name,
        gender: state.gender,
        age: state.age
    }
}
export default connect(mapStateToProps)(User);