import * as actionTypes from "../../utils/actionTypes"

let machinesState = [];
export const machineReducer = (currentMachine, action) => {    
    switch (action.type) {
        case actionTypes.SET_MACHINES:           
            return action.machines;            
		case actionTypes.ADD_MACHINE:
            return [...currentMachine, action.machine]
        case actionTypes.RESET_MACHINES:
            return null        
		default:
			throw new Error("Error!")
	}
}

export const cacheMachinesState = (machines) => {
    machinesState = machines;
}

export {
    machinesState
}