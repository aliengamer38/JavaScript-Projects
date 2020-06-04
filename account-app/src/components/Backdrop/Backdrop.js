import React from "react"
import classes from "./Backdrop.css"

const backdrop = props => {    
    const open = props.isOpen === null ?
        null : (props.isOpen === false ?
            classes.BackdropClose : classes.BackdropOpen)
    const none = props.transitionState === "exited" ? classes.None : null;
    return (
        <div className={`${classes.Backdrop} ${open} ${none}`}
            onClick={e => props.click()}>            
        </div>
    )
}

export default backdrop;