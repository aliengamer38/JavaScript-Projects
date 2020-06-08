import * as actionTypes from "../action/actionTypes"

const initialState = {
    debits: [
        {name: "Pam", counter: 50, amount: 150}
    ]
}

const reducer = (state = initialState, action) => {        
      
    if (action.type === actionTypes.INC_AMOUNT) {                      
        const updatedDebits = [...state.debits];
        const updatedDebit = { ...updatedDebits[action.id] };
        updatedDebit.amount += +action.amount;
        updatedDebits[action.id] = updatedDebit;
        
        return {
            debits: updatedDebits
        }
    } else if (action.type === actionTypes.ADD_DEBIT) {
        return {
            debits: [...state.debits, action.debit]
        }
    } else if (action.type === actionTypes.DEC_AMOUNT) {
        const updatedDebits = [...state.debits];
        const updatedDebit = { ...updatedDebits[action.id] };
        updatedDebit.amount -= +action.amount;
        updatedDebits[action.id] = updatedDebit;
        
        return {
            debits: updatedDebits
        }
    }
    return state;
}

export default reducer;