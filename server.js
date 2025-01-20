const http = require('http'); 
const app = require('./app');
const port  = 5555;
const server = http.createServer(app);
server.listen( port , ()=>{
    console.log("The Server is On Air");  
});


