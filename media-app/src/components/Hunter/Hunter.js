import React from "react"
import AddHunter from "./AddHunter"
import useHunter from "../hooks/useHunter"

const hunterNameStyle = {
    fontWeight: "bold",
    color: "green",
    fontSize: "1.6rem"
}

const hunter = props => {
    const { hunter, addHunter } = useHunter()
    return (
        <div>
            <AddHunter addHunter={addHunter}/>
            {hunter.map(h => (
                <p>
                    <span style={hunterNameStyle}>{h.year}:</span>
                    <span>{h.name}</span>
                </p>
            ))}

        </div>
    )
}

export default hunter;