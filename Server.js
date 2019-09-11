const server = require('express')()
server.listen(3000)
server.get('/',function(req,res){
res.end('hello world')

})