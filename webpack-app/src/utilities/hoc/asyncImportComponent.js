import React, { Component, Fragment } from "react"

const asyncImportComponent = (importPath) => {
    console.log("asyncImportComponent")
    return class extends Component {
        state = {
            Com: null
        }
        componentDidMount() {
            importPath.then(res => {
                this.setState({ Com: res.default })
                
            })
        }
        render() {
            const Com = this.state.Com
            return (                
                Com ? <Com {...this.props}/> : (<p>Loading...</p>)                
            )
        }
    }
}

export default asyncImportComponent