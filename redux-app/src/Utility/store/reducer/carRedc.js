const initialState = {
    cars: {
        public:
            [
                "AX",
                "Ran",
                "Teby"
            ],
        private:
            [
                "Tora",
                "Aodi",
                "Hona"
            ],
        none: [
            "Fere",
            "Bost",
            "Cham"
        ]
    }
}

const reducer = (state = initialState, action) => {
    if (action.type === "DELETE_ITEM") {
        const newCars = { ...state.cars };
        console.log(newCars)
        console.log(action.use)
        delete newCars[action.use]
        console.log(newCars)
        return {
            cars: newCars
        }
    }
    return state;
}

export default reducer;