import React, { useState, useEffect } from "react"
import Loading from "../UI/Loading"
import classes from "./Account.css"

const account = props => {
    const [counter, setCounter] = useState(null)
    let timer;

    const addAccount = () => {
        setCounter((prevState) => prevState + 1)
    }
    const cancelProgress = () => {
        clearInterval(timer)
        setCounter(0)
    }
    useEffect(() => {
        timer = setTimeout(() => {
        setCounter(10)            
        }, 100000)
    }, [])


   
    return (
        <div>
            <h1>Account</h1>
            <p>This is the account of the PC</p>
            <button onClick={e => addAccount()}>Add Account</button>
            <p>Account: {counter === null ? (
                <Loading/>
            ) : counter}</p>
            <button onClick={e => cancelProgress()}>Cancel Progress</button>
        </div>
    )
}

export default account;