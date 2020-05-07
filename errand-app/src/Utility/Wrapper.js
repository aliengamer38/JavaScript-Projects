import React from "react";

const wrapper = (Component, classes) => {
    return props => {        
        return (
            <div className={classes}>
                <Component {...props}/>
            </div>            
        )
    }
}

export default wrapper; 