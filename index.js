const http = require('http');
const handleRequest = require('./Controller/serverController')
const port = 8010;

// const handleRequest = (req, res) => {
//     res.write("<h1>hello</h1>");
//     res.end();
// }

const server = http.createServer(handleRequest);
 
server.listen(port, (err) => {

    if (err) {
        console.log("Server is Not Working.....");
    }
    else {
        console.log("Server is Working.....");
        console.log("http://localhost:" + port)
    }
})