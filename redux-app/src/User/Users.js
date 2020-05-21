import React, { Component } from "react"
import { connect } from "react-redux"
import User from "./User"

class Users extends Component {
    authenticate = (e, id, value) => {
        this.props.addSpecs(id, value)
    }
    render() {
        console.log(this.props)
        return (
            <div>                
                <ul style={{listStyleType: "none"}}>                    
                    {this.props.laptops.map((l, i) => {                        
                        const laptop = this.props.laptops[i];
                        const specs = this.props.specs[i];                        
                        console.log(specs)
                        console.log(laptop);
                        return (
                            <li>
                                <User
                                    name={laptop.name}
                                    info={laptop.info}
                                    isAuthenticated={laptop.isAuthenticated}
                                    authenticate={e => this.authenticate(e, i, specs)}
                                    specs={laptop.specs}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        laptops: state.comps.laptops,
        specs: state.specs.specs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSpecs: (id, value) => dispatch({ type: "ADD_SPECS", id: id, value: value })        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);