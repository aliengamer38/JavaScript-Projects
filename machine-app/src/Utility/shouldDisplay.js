import React from "react"

const shouldDisplay = (Component) => {
    return class Display extends React.Component {
        state = {
            shouldDisplay: true
        }
        display = () => {
            this.setState({shouldDisplay: true})
        }
        render() {
            return (
                <div style={{display: "flex", flexDirection: "column", gap: "0.3rem", alignItems: "center"}}>                
                    <button onClick={e => this.display()}>Display</button>                
                    {this.state.shouldDisplay ? (<Component {...this.props} />) : (<p>Not displayed</p>)}
                </div>
            )
        }
    }
}

export default shouldDisplay;