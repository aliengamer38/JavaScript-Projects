// const mysql = require("mysql2")
// const pool = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     database: "errand-app",
//     password: "WindowsOS__38"
// })

// const db = pool.promise()

// let result;
// let resultId = []
// db.execute("SELECT * FROM users").then(([data, metadata]) => {
//     result = data
//     result.map(r => {
//         resultId.push(r.id)
//         return null
//     })
//     console.log(resultId)
//     db.end()
// })
// console.log("test...")

const x = require("./testReact")
console.log(x)