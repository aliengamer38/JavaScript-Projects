import React from "react"

const salesView = (props) => {
    return (
        <div onClick={props.deleteSales}>
            <p>{props.id}</p>
            <p>{props.details}</p>
            <p>{props.isProcessed}</p>
        </div>
    )
}
export default salesView;