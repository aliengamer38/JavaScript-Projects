import React from "react"

export const AuthContext = React.createContext({});

const authProvider = props => {
    return (
        <AuthContext.Provider value={{...props}}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default authProvider;