const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json()); 

require('dotenv').config();

console.log(process.env.DOCKER);

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
    Pergunta.findAll({raw: true, order:[
        ['id', 'DESC'] //ordenando pelo id de maneira decrescente
    ]}).then(perguntas=>{
        res.render("index",{
            perguntas: perguntas
        })
    });
});

app.get("/perguntar",(req, res)=>{
    res.render("perguntar",{
        })
})

app.get("/pergunta/:id",(req, res)=>{
    var id = req.params.id;
    Pergunta.findOne({
        where: {id : id}
    }).then(pergunta => {
        if (pergunta != undefined){
            res.render("pergunta");
        }else{
            res.redirect("/");
        }
    })
});

app.post("/salvarpergunta", (req, res)=>{
    var pergunta = req.body.pergunta;
    var resposta = req.body.resposta;

    Pergunta.create({
        pergunta: pergunta,
        resposta: resposta
    }).then(()=>{
        res.redirect("/");
        });
});


app.listen(process.env.PORT,()=>{console.log("app em execução!");});
