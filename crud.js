//index.js
(async () => {
    const db = require("./db");
    console.log('Começou!');

    console.log('INSERT INTO CLIENTES');
    const result = await db.insertCustomer({ nome: "Ana", idade: 18, uf: "SP" });
    console.log(result);

    console.log('SELECT * FROM CLIENTES');
    const clientes = await db.selectCustomers();
    console.log(clientes);

    console.log('UPDATE CLIENTES');
    const result2 = await db.updateCustomer(6, { nome: "Zé José", idade: 19, uf: "SP" });
    console.log(result2);

    console.log('DELETE FROM CLIENTES');
    const result3 = await db.deleteCustomer(7);
    console.log(result3);
})();

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
