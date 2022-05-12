var express = require('express'); //acresenta a biblioteca http
var app=express();

var msg = require('./mod_teste');

app.set('view engine','ejs');


app.get('/',function(req,res){
    res.render("home/index");
})

app.get('/formulario_inclusao_noticia',function(req,res){
    res.render("admin/form_add_noticia");
})



app.get('/noticias',function(req,res){
    res.render("noticias/noticias");
})

app.listen(3000,function(){

    console.log("Servidor Rodando");
    console.log(msg());

});

