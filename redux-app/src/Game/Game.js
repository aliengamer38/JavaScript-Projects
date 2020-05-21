import React, { Component } from "react"
import { connect } from "react-redux"
import Car from "./Car"

class Game extends Component {
    
    render() {              
        
        return (
            <div>
        
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cars: state.games.games
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (use) => { dispatch({ type: "DELETE_ITEM", use: use }) }        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Game);