const React = require("react")

const genPage = (Body, styleHref="") => {
    return props => {
        return (
            <html>
                <head>
                    <title>{props.title}</title>
                    <link rel="stylesheet" href={styleHref}/>
                </head>
                <body>
                    <Body {...props}/>
                </body>
            </html>
        )
    }
}

module.exports = {
    genPage
}
