import React, {Component} from "react"
import { Route, BrowserRouter, Switch, Redirect, NavLink } from "react-router-dom"
import SupplierDetails from "./SupplierDetails"

class Supplier extends Component {
    constructor(props) {
        super(props);        
        console.log("SUPPLIER constructor")         
    }
    componentWillMount() {
        console.log("SUPPLIER componentWillMount");
    }
    componentDidUpdate() {
        console.log("SUPPLIER componentDidUpdate")
    }
    componentDidMount = () => {
        console.log("SUPPLIER componentDidMount")
    }
    changeDOM = (e) => {
        console.log(this.inputP);
        const p = document.createElement("p");
        p.appendChild(document.createTextNode("senpai"));
        this.inputP.appendChild(p);
    }
    render() {
        console.log("SUPPLIER render");
        return (
            <div ref={el => {this.inputP = el}}>
                <p>Notice Me</p>
                <button onClick={this.changeDOM}>Click</button>
                {/* <BrowserRouter>                    
                    <Switch>
                        <Redirect from = "/uniqlo/strategy" to="/uniqlo/hash"/>
                        <Route path="/uniqlo/hash" render={() => (
                            <div>
                                <p>Supplier</p>
                                <NavLink to="/uniqlo/link">Please click link</NavLink>
                            </div>
                        )} />
                        <Route path="/uniqlo/link" render={() => (
                            <div>
                                <p>Linking...</p>
                            </div>
                        )}/>
                    </Switch>
                </BrowserRouter> */}
            </div>
        )
    }
}

export default Supplier