import React from "react"
import ErrorPage from "./ErrorPage"

const errorWrapper = (Component) => {
    return class Error extends React.Component {
        state = {
            isThereError: false
        }
        errorBtn = () => {
            this.setState({isThereError: true})
        }
        render() {            
            return (                
                this.state.isThereError ? (<ErrorPage />) : (
                    <React.Fragment>
                        <Component {...this.props} />                                                   
                        <button onClick={e => {this.errorBtn()}}>Error</button>
                    </React.Fragment>                
                )
            )
        }
    }
}

export default errorWrapper;