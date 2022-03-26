const http = require('http')

const server = http.createServer((req,res)=>{

    if(req.url === '/'){
        res.end('Welcome to the home page.')
    }
   else if(req.url === '/about'){
        res.end('Here is a short description of our website.')
     }else{
     res.end(`
     <h1> Opps!!! </h1>
     <p> We can't seem to find the page. 404 error!!</p>
     <a href= "/"> Go Back Home </a>
     `)
     }
//     res.write('Welcome to the home page.')
//      res.end()
})

server.listen(5000) //set up local host port number 