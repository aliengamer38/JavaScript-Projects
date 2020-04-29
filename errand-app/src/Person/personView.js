import React, { useState } from "react"
import "./person.css"
import Radium from "radium"
import styled from "styled-components"

const personView = props => {
    const BtnStyled = styled.button`
        background-color: aqua;
        font-size: 1rem;
        
        @media (max-width: 450px) {
            width: "50%";
        }    
        &:hover {
            background-color: aquamarine;
            font-size: 1.5rem;
        }
    `;
    const NameDesc = styled.p`
        color: ${props => props.isToggle ? "yellow" : "blue"}
    `
    const ValidationMsg = styled.p`
        color: ${props => {
            switch (props.validationCode) {
                case "long":
                    return "green";
                case "short":
                    return "red";
            }
        }}
    `
    let [isToggleBtn, setIsToggleBtn] = useState(false);    
    
    const changeColor = () => {
        if (!isToggleBtn) {                        
            setIsToggleBtn(true)
        } else {                        
            setIsToggleBtn(false)            
        }
    }    
    let validationMessage = props.msgLength;
    let validationCode;
    if (validationMessage > 5) {
        validationMessage = "text too long"
        validationCode = "long";
    } else {
        validationMessage = "text too short";
        validationCode = "short";
    }        
    return (        
        <div>
            <NameDesc isToggle={isToggleBtn}>
                My name is {props.name}
            </NameDesc>            
            <div>
                <input type="text" placeholder="please type in your name..."
                    onChange={props.changeName} className="input"/>
            </div>
            <ValidationMsg validationCode={validationCode}>
                {validationMessage}
            </ValidationMsg>            
            <BtnStyled onClick={changeColor}>
                    Click Me Styled
            </BtnStyled>
        </div>        
    )
}

export default personView;