import React from "react"

const use = (props) => {
    return (
        <li>
            Name: {props.name}; Age: {props.age}; Description: {props.desc}
        </li>
    )
}
export default use;