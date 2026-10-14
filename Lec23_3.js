const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, "Working", {"Content-Type": "text/html"});
    response.write("<h1>Testing Testing</h1><h3>1 2 3</h3>");    
    response.end();
});

/*Remember, || means "or"*/
server.listen(process.env.PORT || 3000, () =>{
    console.log("Server is running at port 3000...");
});
