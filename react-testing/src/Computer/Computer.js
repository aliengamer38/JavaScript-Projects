import React from "react";
import "./Computer.css";

const computer = (props) => {
    return (
        <div className="computer">
            <form className="form" onSubmit={props.changeUser}>
                <label htmlFor="name">Name:</label>                                                            
                <input type="text" id="name" placeholder="Please type in your name..."/>
                <label htmlFor="age">Age:</label>                                    
                <input type="text" id="age" placeholder="Please type in your age..."/>                
                <label htmlFor="description">Description:</label>                
                <input type="text" id="description" placeholder="Please type in your description..."/>                
                <input type="submit" className="submit" value="Submit"/>
                <button className="display" onClick={props.display}>Display</button>
            </form>
        </div>
    )
}
export default computer;