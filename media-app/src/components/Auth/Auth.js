import React, { useRef, useEffect, useState, useContext } from "react"
import classes from "./Auth.css"
import atom from "../UI/svg/atom.svg"
import circle from "../UI/svg/circle.svg"
import logo from "../UI/svg/android.svg"
import connect from "../UI/svg/connect.svg"
import { AuthContext } from "../context/auth-context"


const auth = props => {
    const authContext = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const submitAuth = () => {
        setEmail("")
        setPassword("")
    }
    const changeInput = (e) => {        
        switch (e.target.id) {
            case "email":
                setEmail(e.target.value)
                break
            case "password":
                setPassword(e.target.value)
                break;
            default:
        }
    }
    useEffect(() => {
        
    }, [])
    console.log("AUTH rendering...")
    return (
        <div className={classes.Auth}>
            <div>
                <label htmlFor="email">Email: </label>
                <input value={email} onChange={e => changeInput(e)} type="email" id="email" placeholder="Email..."/>
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input value={password} onChange={e => changeInput(e)} type="password" id="password" placeholder="Password..."/>
            </div>            
            <div>
                <button onClick={e => submitAuth()}>Submit</button>                
            </div>            
            <div>
                <p onClick={e => authContext.displayMe()}>{authContext.status}</p>
            </div>
        </div>
    )
}

export default auth;