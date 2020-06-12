const userInput = () => {
    return `
        <html>
        <head>
            <title>User Input</title>
        </head>
        <body>
            <form method="post" action="/redirect" style="display:flex; flex-direction: column; align-items: center; gap: 0.3rem">
                <div style="display: flex; flex-direction: row; align-items: center; gap: 0.3rem">
                    <label for="name">Name: </label>
                    <input type="text" id="name" placeholder="Name..." name="name"/>
                </div>
                <div>
                    <label for="gender">Gender: </label>
                    <input type="text" id="gender" placeholder="Gender..." name="gender"/>
                </div>
                <div>
                    <label for="age">Age: </label>
                    <input type="text" id="age" placeholder="Age..." name="age"/>
                </div>
                <div>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </body>
        </html>
    `
}

const successMsg = () => {
    return `
        <html>
        <head>
            <title>User Input</title>
        </head>
        <body>
            <h1>Success!</h1>
            <p>Form has been sent successfully</p>
            <a href="/input">Go Back</a>
        </body>
        </html>
    `
}


const httpPage = (status) => {
    const page = 
    `
        <html>
        <head>
            <title>node-app</title>
        </head>
        <body>
            ${status !== "error" ? `
                <h1>Node</h1>
                <p>This is a webpage</p>`                
            : `<p>Error!</p>`}            
        </body>
        </html>
    `
    return page;
}

const inputPage = () => {
    const page = `
        <html>
        <head>
            <title>node</title>
        </head>
        <body>
            <form method="post" action="/submit">
                <label for="message">Message:</label>
                <input type="text" name="message" id="message"/>                
                <div>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </body>
        </html>
    `
    return page;
}

const submitPage = () => {
    const page = 
    `
        <html>
        <head>
            <title>node</title>
        </head>
        <body>
            <p>Success!</p>
        </body>
        </html>
    `
    return page;
}

module.exports = {
    httpPage,
    inputPage,
    submitPage,
    userInput,
    successMsg
}