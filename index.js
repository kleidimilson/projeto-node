const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();


app.use(express.static(__dirname + '/Views/pagina-inicial'));
app.use(express.static(__dirname + '/Views/cadastro'));
app.use(express.static(__dirname + '/Views/login'));
app.use(express.static(__dirname + '/Views/tela-admin'));
app.use(express.static(__dirname + '/Views/criar-evento'));
app.use(express.static(__dirname + '/Views/criar-evento-2'));

//template engine


app.get("/", function(req, res){
    res.sendFile(__dirname + "/Views/pagina-inicial/index.html");
})

app.get("/criar-evento" ,function(req, res){
    res.sendFile(__dirname + "/Views/criar-evento/index.html");
})
app.get("/criar-evento-2" ,function(req, res){
    res.sendFile(__dirname + "/Views/criar-evento-2/index.html");
})

app.get("/login",function(req, res){
    res.sendFile(__dirname + "/Views/login/login.html");
})

app.get("/cadastro",function(req, res){
    res.sendFile(__dirname + "/Views/cadastro/cadastro.html");
});

app.get("/admin",function(req, res){
    res.sendFile(__dirname + "/Views/tela-admin/index.html");
});


app.listen(3000, function(){
    console.log("Servidor rodando no endereço localhost:3000");
});