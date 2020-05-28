import React from "react"
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Computer from "./Computer"
import Login from "../Auth/Login"

configure({ adapter: new Adapter() })

describe("<Computer/>", () => {
    it ("should contain a single p tag", () => {
        const wrapper = shallow(<Computer />)
        expect(wrapper.find(Login)).toHaveLength(1);
    })  
})


