const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json()); 

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


//rotas
app.get("/",(req, res)=>{
    Pergunta.findAll({raw: true}).then(perguntas=>{
        console.log(perguntas);
    })
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

    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(()=>{
        res.redirect("/");
        });
});


app.listen(8080,()=>{console.log("app em execução!");});
