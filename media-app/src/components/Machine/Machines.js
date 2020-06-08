import React, { useState, useEffect, Fragment, useCallback, useReducer } from "react"
import Machine from "./Machine.js"
import Loading from "../UI/Loading"
import classes from "./Machine.css"
import { machineReducer } from "./reducer/machine"
import * as actionTypes from "../utils/actionTypes"


const machines = props => {               
    return (        
        <div className={classes.Machines}>
            {props.machines === null ? <Loading /> : props.machines.map(m => (
                <Machine
                    key={m.key}
                    name={m.name}
                    character={m.character}
                    status={m.status}
                    year={m.year}/>
            ))}
        </div>
    )
}

export default machines;