import React from "react"

const orderView = (props) => {
    return (
        <div onClick={props.deleteItem}>
            <p>{props.orderId}</p>
            <p>{props.orderDesc}</p>                        
        </div>
    )
}

export default orderView;