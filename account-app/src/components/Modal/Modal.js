import React from "react"
import classes from "./Modal.css"

const modal = props => {    
    const open = props.isOpen === null ?
        null : (props.isOpen === false ?
            classes.ModalClose : classes.ModalOpen)
    return (
        <div className={`${classes.Modal} ${open}`}>
            <h1>Do you want to close this modal</h1>
            <div className={classes.Choices}>
                <button onClick={e => props.close()}>Yes</button>
                <button onClick={e => props.close()}>No</button>
            </div>            
            <button
                className={classes.Close}
                onClick={e => props.close()}>
                    &times;
            </button>
        </div>
    )
}

export default modal;