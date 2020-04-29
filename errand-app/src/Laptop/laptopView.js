import React from "react"

const laptop = (props) => {    
    return (
        <div>
            <div>
                <button onClick={props.toggle}>Click Me</button>
            </div>
            <div onClick={props.changeInfo} style={props.display ? {display: "block"} : {display: "none"}}>
                <p>{props.name}</p>
                <p>{props.desc}</p>
                <p>{props.age}</p>
            </div>
        </div>
    )
}
export default laptop;