import React from "react";
import Classes from "./BuildControl.css"

const buildControl = (props) => {
    return (
        <div className={Classes.BuildControl}>
            <div className={Classes.label}>{props.label}</div>
            <button className={Classes.Less}>Less</button>
            <button className={Classes.More} onClick={props.added}>More</button>
        </div>
    )
}
export default buildControl;