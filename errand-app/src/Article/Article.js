import React, { Component, useEffect } from "react"

const article = () => {
    useEffect(() => {
        console.log("[Article.js] useEffect");
    })
    return (
        <div>
            Article
        </div>
    )
}

export default React.memo(article);