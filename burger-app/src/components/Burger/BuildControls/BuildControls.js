import React from "react";
import Classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl"

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat"}    
]
const buildControls = (props) => {
    return (
        <div className={Classes.BuildControls}>
            <p>Current Price: {props.price}</p>
            {controls.map(ctrl => {
                return <BuildControl key={ctrl.label}
                    label={ctrl.label}                    
                    added={() => props.ingredientAdded(ctrl.type)}/>
            })}
        </div>
    )
}
export default buildControls;