import React, { Fragment } from "react"

const display = props => {    

    return (<button
        onClick={e =>
            props.display()}>
        {props.isDisplay ? "Hide" : "Display"} Machines
    </button>)             
}

export default display