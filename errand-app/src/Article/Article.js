import React, { Component, useEffect } from "react"

class Article extends Component {
    componentDidMount() {
        console.log("ARTICLE mounted");
    }
    render() {
        console.log("ARTICLE rendered")
        return (
            <div>
                Article
            </div>
        )
    }
}
export default Article;