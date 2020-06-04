import React, { Component } from "react"

class Account extends Component {
    state = {
        specs: "MSI"
    }
    changeSpecs = () => {

    }
    render() {
        
        return (
            <div>
                <h1>Lorem ipsum dolor sit amet.</h1>                
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corporis tempore officia pariatur dolorem ad. Sit et eius tenetur quam voluptas itaque quidem nesciunt neque?</p>
                <input type="text" value={this.state.specs} onChange={e => {
                    console.log(e.target)
                    console.log(e.target.value)    
                    this.setState({ specs: e.target.value });
                }}/>
            </div>
        )
    }
}

export default Account;