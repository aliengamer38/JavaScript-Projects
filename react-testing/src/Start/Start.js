import React, {useState} from "react"
import "./Start.css"
import Computer from "../Computer/Computer"

const start = () => {
    
    const [user, setUser] = useState({
        name: "Pam",
        age: 30,
        description: "developer"
    })
    const [customer, setCustomer] = useState({
        isEnrolled: true,
        certification: "MS"
    })
    
    const changeUser = (e) => {
        e.preventDefault();        
        setUser({
                name: document.getElementById("name").value,
                age: document.getElementById("age").value,
                description: document.getElementById("description").value,
            }
        )
        clearFields();
    }    
    const clearFields = () => {
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("description").value = "";
    }
    const display = (e) => {        
        e.preventDefault();
        console.log(user.name);
        console.log(user.age);
        console.log(user.description);
    }

    return (
        <div className="main">            
            <Computer changeUser={changeUser} display={display}/>
        </div>
    )
}

export default start;