const http = require('http')
const hostname = "127.0.0.1"
const port = 3000
const url = require('url')
const operacoes = require('./model/operacoes')


http.createServer(function(req, res){

    res.writeHead(200,{'Content-Type':'text/html'})
    let q = url.parse(req.url, true).query
    let a = parseInt(q.numA)
    let b = parseInt(q.numB)

    if(q.opcao == "somar"){
        res.end("Resultado: " + operacoes.sum(a,b))       
    }else if(q.opcao == "subtrair"){      
        res.end("Resultado: " + operacoes.sub(a,b)) 
    }
    else if(q.opcao == "multiplicar"){       
      res.end("Resultado: " + operacoes.mult(a,b)) 
    }
    else if(q.opcao =="dividir"){       
        res.end("Resultado: " + operacoes.div(a,b)) 
    }    

}).listen(3000,()=>{
    console.log(`Server running in http://${hostname}:${port}` )
})


