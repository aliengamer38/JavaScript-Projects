import React, { Fragment } from "react"
import classes from "./Machine.css"

const machine = props => {
    return (
        <div className={classes.Machine}>
            <p><span className={classes.Title}>Character: </span>{props.character}</p> |
            <p><span className={classes.Title}>Name: </span> {props.name}</p> |
            <p><span className={classes.Title}>Status: </span> {props.status}</p> |
            <p><span className={classes.Title}>Year: </span> {props.year}</p>
            <button onClick={e => props.delete()}>Delete</button>
        </div>
    )
}

export default machine;