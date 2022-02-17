const http = require('http')
const host  = 'http://localhost'
const port = 3000

http.createServer((req, res) => {
    res.end(`<h1>Jonathan</h1>`)
}).listen(port, () => console.log(`${host}:${port}`))