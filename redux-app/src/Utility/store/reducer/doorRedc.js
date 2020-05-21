const initialState = {
    doors: ["FX", "Taxi", "AUV"]
}

const reducer = (state = initialState, action) => {
    console.log("reducer")
    if (action.type === "DELETE_ITEM") {
        const newDoors = [...state.doors];
        newDoors.splice(action.id, 1);
        return {
            doors: newDoors
        }
    } else if (action.type === "COPY_ITEM") {
        console.log("copying...")
        return {
            doors: [...state.doors]
        }
    }
    return state;
}

export default reducer;