const fs = require("fs")
const http = require("http")
const { userInput, successMsg } = require("./site")


const server = http.createServer((req, res) => {    
    if (req.url === "/input") {
        res.write(userInput())
        res.end()
    } else if (req.url === "/redirect" && req.method === "POST") {           
        console.log("redirect post")
        const body = []
        req.on("data", chunk => {
            console.log("data chunk")
            body.push(chunk)
        })
        req.on("end", () => {
            console.log("end")
            let msgText = "";
            const message = Buffer.concat(body).toString();
            const keyValPairs = []
            const keyVals = message.split("&")
            for (keyVal of keyVals) {
                const [key, val] = keyVal.split("=")
                msgText += `${key}: ${val}\n`
            }                        
            fs.writeFileSync("write.txt", msgText)
        })
        res.statusCode = 302
        res.setHeader("Location", "/redirect")        
        res.end();
    } else if (req.url === "/redirect" && req.method === "GET") {        
        console.log("redirect get")
        res.write(successMsg())
        res.end();
    }
})
server.listen(3030)
console.log("Listening...")