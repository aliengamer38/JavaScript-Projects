import React, { Component } from "react"
import * as actionTypes from "../store/action/actionTypes"
import { connect } from "react-redux"

export const special = (Com) => {
    const specialSpecs = () => {
        return {
            name: "AUX",
            specs: "machine A",
            age: 100,
            build: "Iron"
        }
    }    

    return class Special extends Component {
        render() {
            return (                
                <Com specialSpecs={specialSpecs} {...this.props}/>                                    
            )
        }
    }
    
}

