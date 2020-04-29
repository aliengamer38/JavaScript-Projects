import React from "react"
import "./computer.css"

const computer = () => {
    return (
        <div className="main">
            <p>Computer number: {Math.round(Math.random() * 1000)}</p>
        </div>
    )
}

export default computer;