import React from "react"
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

configure({ adapter: new Adapter() })

describe("general testing", () => {
    it("should display equal for reference types", () => {
        expect({ name: "Pam" }).toEqual({ name: "Pam" })
    })
})


