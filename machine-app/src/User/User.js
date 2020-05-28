import React, { Component } from "react"
import { connect } from "react-redux"
import errorWrapper from "../Utility/errorWrapper"

class User extends Component {
    render() {
        return (
            <div>
                <p>{this.props.user}</p>      
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.users[0]
    }
}

export default connect(mapStateToProps)(errorWrapper(User));