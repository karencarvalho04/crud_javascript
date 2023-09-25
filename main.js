
//declaração de constantes utilização das dependências necessárias
const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser')

//constante que recebe todas as funções da dependência express
const app = express();


//armazena os dados da conexão
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'crud'
});
//cria a conexão e emite mensagem indicando seu status
connection.connect(function(err){
    if(err){
        console.error('Erro ', err);
        return
    }
    console.log("Conexão ok")
});


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}));


//cria uma rota para direcionamento do formulario html
app.get("/forms", function(req, res){
    res.sendFile(__dirname + "/html/forms.html") 
})

//cria rota contendo a função que adiciona os dados ao banco
app.post('/adicionar', (req, res) => {
    const nome = req.body.nome;
    const idade = req.body.idade;
    const uf = req.body.uf;

    const values = [nome, idade, uf];
    const insert = "INSERT INTO clientes(nome, idade, uf) VALUES(?,?,?)";

    connection.query(insert, values, function(err, result) {
        if (!err) {
            console.log("Inserido!");
            res.send("Dados inseridos");
        } else {
            console.log("Não inserido ", err);
            res.send("Erro");
        }
    });
});

//cria a função que "ouve" a porta do servidor
app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
});

/*connection.query("INSERT INTO clientes(nome, idade, uf) VALUES('Ana', 18, 'SP')", function(err, result){
    if (!err){
        console.log("Inserido")

    }else{
        console.log("Erro: não foi possível consultar");
    }
});

connection.query("SELECT * FROM clientes", function(err, rows, fields){
    if (!err){
        console.log("Resultado: ", rows);
    }else{
        console.log("Erro: não foi possível consultar");
    }
});

connection.query("SELECT * FROM clientes", function(err, rows, fields){
    if (!err){
        console.log("Resultado: ", rows);
    }else{
        console.log("Erro: não foi possível consultar");
    }
});*/

