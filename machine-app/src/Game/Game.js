import React, { Component } from "react"

class Game extends Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.status}</p>
                <p>{this.props.character}</p>
                <p>{this.props.year}</p>
            </div>
        )
    }
}

export default Game;