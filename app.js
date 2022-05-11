var express = require('express'); //acresenta a biblioteca http
var app=express();


app.get('/',function(req,res){
    res.send("<html><body>Portal de noticias</body></html>");
})

app.get('/tecnologia',function(req,res){
    res.send("<html><body>Portal de noticias de tecnologia</body></html>");
})

app.listen(3000,function(){

    console.log("Servidor Rodando");
});