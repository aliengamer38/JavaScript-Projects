import React from "react"

export const LogContext = React.createContext();

const LogProvider = props => {
    return (
        <LogContext.Provider value={{...props}}>
            {props.children}
        </LogContext.Provider>
    )
}

export default LogProvider;