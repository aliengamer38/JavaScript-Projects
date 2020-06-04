import React, { Component } from "react"
import { connect } from "react-redux"


class Game extends Component {   
    state = {
        name: "",
        description: ""
    }
    nameChange = (e) => {
        this.setState({name: e.target.value})
    }
    changeName = () => {
        this.props.changeName(this.state.name, this.state.description);        
    }
    descriptionChange = (e) => {
        this.setState({description: e.target.value})        
    }
    render() {
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.3rem"
            }}>
                <input
                    type="text"
                    placeholder="Name..."
                    onChange={e => this.nameChange(e)}
                    value={this.state.name}/>
                <input
                    type="text"
                    placeholder="Description..."
                    onChange={e => this.descriptionChange(e)}
                    value={this.state.description} />
                <p>{this.props.name}</p>      
                <button onClick={e => this.changeName()}>Change Name</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.game.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeName: (name, description) => {
            dispatch(
                {
                    type: "INITIALIZE_GAME",
                    name: name,    
                    description: description
                }
            )
        }           
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Game);