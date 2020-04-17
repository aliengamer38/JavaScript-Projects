import React, { Component } from "react";
import "./Person.css";


const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I am a {props.name} and I am {props.age} years old!</p>
            <div>{props.children}</div>
        </div>
    )
};

export default person;
