import React from "react"
import classes from "./Loading.css"

const loading = props => {
    return (
        <span className={classes.Loading}>
            <span className={classes.LoadingText}>Loading</span>
            <span className={classes.LoadingOne}>.</span>
            <span className={classes.LoadingTwo}>.</span>
            <span className={classes.LoadingThree}>.</span>
        </span>
    )
}

export default loading