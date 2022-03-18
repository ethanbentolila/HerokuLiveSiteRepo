import http from 'http';
import fs from 'fs';
import mime from 'mime-types';


let lookup = mime.lookup; //alias for the lookup function

const port = process.env.PORT || 3000;

// Creates a server instance (Immutable) - Can't change unless you restart the server
const server = http.createServer( function(req, res) 
{
    let path = req.url as string;

    if(path == "/")
    {
        path = "/index.html";
    }

    console.log(path);
    let mime_type = lookup(path.substring(1)) as string;

    fs.readFile(__dirname + path, function(err,data) 
    {
        if (err) 
        {
            res.writeHead(404);
            res.end("ERROR: 404 - File Not Found!" + err.message);
            return;
        }
        res.setHeader("X-content-Type-Options","nosniff"); //security
        res.writeHead(200, {"Content-Type": mime_type});
        res.end(data);
    });
});

//add an event listener
server.listen(port,  function() 
{
    console.log(`Server running on Port: ${port}/`);
});

