import React, { Component } from "react"

class Post extends Component {
    componentDidUpdate() {
        console.log("POST componentDidUpdate")
    }
    render() {
        console.log("POST render")
        return (
            <div>

            </div>
        )
    }
}

export default Post;