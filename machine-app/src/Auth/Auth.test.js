import React from "react"
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Login from "./Login"
import Computer from "../Computer/Computer"

configure({adapter: new Adapter()});


describe("<Auth/>", () => {
    it("should render paragraph tag", () => {
        const wrapper = shallow(<Computer/>)
        expect(wrapper.find("p")).toHaveLength(1)
    })
    it("should render Input component", () => {
        const wrapper = shallow(<Computer />)
        expect(wrapper.find(Login)).toHaveLength(1)
    })
})