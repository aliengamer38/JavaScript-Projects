import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router"

class Counter extends Component {    
    addLocalCounter = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }
    addReduxCounter = () => {
        this.props.addCounter();
    }
    state = {
        counter: 0,
        isSwitch: false
    }
    switch = () => {
        this.setState({ isSwitch: true })
        console.log("switching")
    }
    componentWillUnmount() {
        console.log("COUNTER componentWillUnmount")
        console.log(this.state.isSwitch)
    }
    render() {
        return (
            <div>
                <p>Local: {this.state.counter}</p>
                <p>Redux: {this.props.counter}</p>
                <button onClick={this.addLocalCounter}>Add local state</button>
                <button onClick={this.addReduxCounter}>Add redux state</button>
                <button onClick={this.switch}>Switch</button>
                {this.state.isSwitch ? (<Redirect to="/" />) : null}                
            </div>
        )
    }
}
    
const mapStateToProps = state => {
    return {
        counter: state.counter.counter
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addCounter: () => { dispatch({ type: "ADD_COUNTER" }) }        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);