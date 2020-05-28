import React, { Component } from "react"

class Wrapper extends Component {
    render() {
        const Children = this.props.children[0];
        return (
            <div>
                <Children/>
            </div>
        );
    }
}

export default Wrapper