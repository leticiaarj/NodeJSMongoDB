const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true);
    const name = urlInfo.query.name;

    res.statusCode = 200;
    res.setHeader('Contenty-Type', 'text/html');
    
    if(!name){
        res.end('<h1>Put your name</h1><form method="get"> <input type="text" name="name"/><input type="submit" value="Send"/></form>');
    }else{
        res.end(`<h1>Welcome ${name}!</h1>`)
    }
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
})