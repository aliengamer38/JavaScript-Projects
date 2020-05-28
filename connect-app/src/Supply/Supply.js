import React, { Component } from "react"
import { connect } from "react-redux"

class Supply extends Component {    
    render() {
        return (
            <div>
                <p>Supply</p>
                <p>{this.props.supply}</p>
                <button onClick={this.props.click}>Display Supply</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
	return {
        supply: state.supply
	}
}
const mapDispatchToProps = dispatch => {
    return {
        click: () => { dispatch({ type: "NONE" }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Supply);