import React, { useState, useEffect, useRef } from "react"

const display = React.memo(props => {        
    const [name, setName] = useState("")
    const changeName = (inputName) => {        
        setName(inputName)
    }
    
    return (
        <div>
            <input type="text"
                value={name}
                onChange={e => changeName(e.target.value)}/>         
        </div>
    )
})

export default display;