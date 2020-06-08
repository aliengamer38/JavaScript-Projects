import { useReducer } from "react"
import { machineReducer } from "../Machine/reducer/machine"


const sendRequest = () => {
    const [machines, dispatch] = useReducer(machineReducer, [])
    return {
        machines: machines
    }

}

export default sendRequest