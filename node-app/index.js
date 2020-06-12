const fs = require("fs")
const http = require("http")
const { httpPage, inputPage, submitPage } = require("./site")

const server = http.createServer((req, res) => {        
    if (req.url === "/input") {
        res.write(inputPage())
        res.end();
    } else if (req.url === "/submit") {
        const reqBody = [] 
        req.on("data", chunk => {
            console.log(chunk)
            reqBody.push(chunk)
        })
        req.on("end", () => {
            const parseBody = Buffer.concat(reqBody).toString();
            const msg = parseBody.split("=")[1]
            fs.writeFileSync("writeme.txt", msg)            
        })
        res.write("11")
        res.end();
    } else if (req.url === "/") {
        res.setHeader("Content-Type", "text/html")
        res.write(httpPage("main"))
        res.end();
    } else {
        res.write(httpPage("error"))
        res.end();
    }
})

server.listen(3030)
console.log("Listening...")

const anotherServer = http.createServer((req, res) => {
    if (req.url === "/server") {
        res.write("Server");
        res.end();
    }
})

anotherServer.listen(4040)
console.log("Another Listening...")