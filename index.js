const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
//database

connection
.authenticate()
.then(()=>{
    console.log("conexão realizada com sucesso!")
})
.catch((msgErro)=>{
    console.log(msgErro)
})

//usando ejs como renderizador de html
app.set('view engine', 'ejs');

//usando arquivos estáticos
app.use(express.static('public'));

//body-parser
app.set(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json()); 

//rotas
app.get("/",(req, res)=>{
    res.render("index",{
    });
});

app.get("/perguntar",(req, res)=>{
    res.render("perguntar",{
        })
})


app.post("/salvarpergunta", (req, res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("titulo: " + titulo + " descrição: " + descricao);
});

app.listen(8080,()=>{console.log("app em execução!");});
