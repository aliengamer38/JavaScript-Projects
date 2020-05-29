import React, { Component } from "react"

class Credit extends Component {
    render() {
        return (
            <div>
                Name: {this.props.name}
                <button onClick={e => this.props.changeName()}>Change Name: </button>
            </div>
        )
    }
}

export default Credit