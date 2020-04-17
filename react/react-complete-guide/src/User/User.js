import React from "react"

const user = (props) => {
    let text;
    if (!props.click) {
        text = (<div>
                    <p>{props.name} - {props.description}</p>
                </div>);
    } else {
        text = (
            <div>
                <p onClick={props.click}>NOTE: {props.number}: {props.job}</p>
            </div>
        )
    }
    return text;
};

export default user;