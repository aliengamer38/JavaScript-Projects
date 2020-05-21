import React, { Component } from "react"
import { connect } from "react-redux"
import * as actions from "../Utility/store/actions/actions"


class Plane extends Component {
    componentWillMount() {
        this.priceInput = React.createRef();
    }
    componentDidMount() {
        // this.props.display();
    }
    render() {
        return (
            <div style={{textAlign: "center"}}>
                <p>{this.props.engine}</p>
                <p>{this.props.booster}</p>
                <p>{this.props.use}</p>
                <p>{this.props.price}</p>
                <input type="number" ref={this.priceInput}/>
                <button onClick={e => this.props.addPrice(+this.priceInput.current.value)}>Increase Price</button>
                <button onClick={e => this.props.subtractPrice(+this.priceInput.current.value)}>Decrease Price</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return {
        appendProp: () => dispatch(actions.appendProp()),
        addPrice: (value) => dispatch(actions.addPrice(value)),
        subtractPrice: (value) => dispatch(actions.subtractPrice(value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Plane);