import React, { Component } from "react"
import { connect } from "react-redux"
import * as actionTypes from "../store/action/actionTypes"
import * as actions from "../store/action/actions"
import Game from "./Game"

class Games extends Component {
    fields = ["name", "character", "year", "status"]
    state = {
        
    }
    constructor(props) {
        super(props);
        this.inputFields = {};
        this.fields.map(c => {
            this.inputFields[c] = React.createRef();
            return null;
        })
    }
    componentDidMount() {
        this.props.getGames();
    }
    postGame = (obj) => {        
        let gameProps = Object.keys(obj);
        console.log(gameProps)
        let gameInfo = {};
        gameProps.map(o => {
            gameInfo[o] = obj[o].current.value
            return null;
        })
        console.log(gameInfo)
        this.props.addGame(gameInfo);
    }
    capitalizeWord = (word) => {
        return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
    }
    render() {
        const games = this.props.games;
        let gamesDisplay;
        if (games) {
            gamesDisplay = (
                <React.Fragment>
                    {games.map(game => {
                        return (
                            <React.Fragment>
                                <Game
                                    name={game.name}
                                    status={game.status}
                                    character={game.character}
                                    year={game.year}
                                />
                            </React.Fragment>

                        )
                    })}
                    <div style={{ display: "flex", gap: "0.3rem", flexDirection: "column" }}>
                        {this.fields.map(c => {
                            return (
                                <div>
                                    <label htmlFor={c}>{this.capitalizeWord(c)}: </label>
                                    <input type="text" id={c} ref={this.inputFields[c]}/>                    
                                </div>
                            )
                        })}                    
                    </div>
                    <div>
                        <button style={{marginTop: "0.3rem"}}
                            onClick={e => this.postGame(this.inputFields)}>Post</button>
                    </div>

                </React.Fragment>
            )
        } else {
            gamesDisplay = "Loading...";
        }
        return (
            <div>
                {gamesDisplay}
            </div>            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        game: state.games.games
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGames: () => { dispatch(actions.getGame()) },   
        addGame: (data) => {dispatch(actions.addGame(data))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);