const initialState = {
    laptops: [
        { name: "MSI", info: "high-end", isAuthenticated: false },
        { name: "Dell", info: "low-end", isAuthenticated: false }        
    ]
}

const reducer = (state = initialState, action) => {
    if (action.type === "ADD_ITEM") {
        return {
            laptops: [...state.laptops].concat(action.newItem)
        }
    } else if (action.type === "ADD_SPECS") {                
        console.log(state.laptops);
        console.log(action.id);
        const newLaptops = [...state.laptops];
        const newLaptop = { ...newLaptops[action.id] }
        newLaptop.specs = action.value;
        newLaptop.isAuthenticated = true;
        newLaptops[action.id] = newLaptop;
        console.log(newLaptop);
        console.log(newLaptops);
        return {
            laptops: newLaptops
        }
    }
    return state
}

export default reducer;