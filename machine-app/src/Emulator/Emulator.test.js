import React from "react"
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Display from "../Display/Display"
import Emulator from "../Emulator/Emulator"
import { game } from "./emulate"

configure({ adapter: new Adapter() })

describe("<Emulator/>", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Emulator/>)
    })
    it("should render 2 display", () => {
        wrapper.setProps({ isEmulated: true });
        expect(wrapper.find(Display)).toHaveLength(2)
    })
    it("should render 3 display", () => {
        wrapper.setProps({isEmulated: false})
        expect(wrapper.find(Display)).toHaveLength(3)
    })
    it("should render Display=true", () => {
        wrapper.setProps({ isAuthenticated: true });
        expect(wrapper.contains(<Display>TaaaRUE</Display>)).toEqual(true)
    }) 
})