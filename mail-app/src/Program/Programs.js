import React, { Component } from "react"
import { withRouter, Link, Route, BrowserRouter } from "react-router-dom"
import AuthContext from "../Utility/AuthContext"

class Programs extends Component {
    state = {
        programs: this.context.programs,        
    }
    
    constructor(props, AuthContext) {
        console.log("constructor");
        super(props, AuthContext);                 
    }
    static contextType = AuthContext;
    componentDidMount() {
        console.log(this.context) 
        console.log("PROGRAMS componentDidMount")
    }
    componentDidUpdate() {
        console.log("PROGRAMS componentDidUpdate")        
    }
    render() {             
        console.log(this.state.programs)        
        console.log(this.props.match)
        return (
            <BrowserRouter>
                <Route path="/prog" render={() => (
                    <ul>                        
                        {this.state.programs.map((p, i) => (
                            <Link to={`/prog/${i + 1}`}>
                                <li>{p}</li>
                            </Link>
                        ))}
                    </ul>
                )}/>
                <Route path="/prog/:id" render={() => {         
                    console.log(this.props.match)
                    return (
                        <div>
                            <p>Name: {this.state.programs[this.props.match.params.id - 1]}</p>
                        </div>
                    )
                }}/>
            </BrowserRouter>
        )
    }
}

export default withRouter(Programs);