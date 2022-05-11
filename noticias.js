console.log("Teste")
var http = require('http'); //acresenta a biblioteca http

const port = process.env.PORT ||3000;

var server = http.createServer( function(req,res){
	var categoria = req.url;

if (categoria == '/tecnologia'){
	res.end("<html><body>Portal de noticias de tecnologia</body></html>");

} else if (categoria == '/moda'){
	res.end("<html><body>Portal de noticias moda</body></html>");

} else if (categoria == '/beleza'){

	res.end("<html><body>Portal de noticias de beleza</body></html>");
	
}else if (categoria == '/TI'){
	res.end("<html><body>Portal de noticias de TI</body></html>");

}
else if (categoria == '/AUTO'){
	res.end("<html><body>Portal de noticias de auto</body></html>");
}
else {
    res.end("<html><body>Portal de noticias</body></html>");
}
});

server.listen(port,()=> {
	console.info("Aplicação Rodando !");
});