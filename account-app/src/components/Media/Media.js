import React, { useState, useEffect, Suspense, lazy, Fragment } from "react"
import { Route, BrowserRouter } from "react-router-dom"

const media = props => {
    console.log("MEDIA render")
    const [name, setName] = useState("Pam")
    const Display = lazy(() => {
        return import("../Display/Display");
    })

    // useEffect(() => {
    //     console.log("useEffect body")
    //     // return () => {
    //     //     console.log("useEffect return")
    //     // }
    // }, [props.status])

    const changeName = () => {
        console.log("changeName")
        setName("aPam")
    }
    
    return (
        <div>
            <BrowserRouter>
                <Suspense fallback={<p>Loading...</p>}>
                    <Route path="/display" render={() => (
                        <Fragment>
                            <button onClick={e => changeName()}>Change Name</button>
                            <Display/>
                        </Fragment>
                    )} />
                </Suspense>
            </BrowserRouter>
        </div>
    )
}

export default media;