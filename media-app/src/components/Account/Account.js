import React, { useState, useEffect } from "react"


const account = props => {
    const [counter, setCounter] = useState(null)

    const addAccount = () => {
        setCounter((prevState) => prevState + 1)
    }
    useEffect(() => {
        setTimeout(() => {
        setCounter(10)            
        }, 2000)
    }, [])
    const loading = (
        <span>
            <span></span>
        </span>
    )
    return (
        <div>
            <h1>Account</h1>
            <p>This is the account of the PC</p>
            <button onClick={e => addAccount()}>Add Account</button>
            <p>Account: {counter === null ? (
                <span>

                </span>
            ) : counter}</p>
        </div>
    )
}

export default account;