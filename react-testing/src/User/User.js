import React from "react";

const person = (props) => {
    return (
        <div>
            <p>This is a user {Math.round(Math.random() * 100)} with name {props.name} and age {props.age}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;