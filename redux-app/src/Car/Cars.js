import React, { Component } from "react"
import { connect } from "react-redux"
import Car from "./Car"

class Cars extends Component {
    state = {
        isUpdated: false
    }
    deleteItem = (e, use) => {
        this.props.deleteItem(use);
        this.setState({isUpdated: true})
    }
    
    render() {              
        const keys = Object.keys(this.props.cars);
        return (
            <div>
                {Object.values(this.props.cars).map((c, i) => (
                    <Car car={c}
                        title={keys[i]}
                        deleteItem={this.deleteItem}
                        isUpdated={this.state.isUpdated}/>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cars: state.cars.cars
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (use) => { dispatch({ type: "DELETE_ITEM", use: use }) }        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cars);