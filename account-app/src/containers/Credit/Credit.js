import React, { Component } from "react"
import classes from "./Credit.css"

class Credit extends Component {    
    state = {
        transitionState: ["entering", "entered", "exiting", "exited"],
        transitionColor: ["Green", "Blue", "Yellow", "Red"]
    }
    render() {                        
        const index = this.state.transitionState.findIndex(t => t === this.props.transitionState)        
        return (
            <div>
                <p className={`${classes.Credit} ${classes[this.state.transitionColor[index]]}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ut accusantium amet facere eligendi. Vero beatae maiores explicabo temporibus molestiae quasi natus ipsa doloremque quia!
                </p>
            </div>
        )
    }
}

export default Credit;