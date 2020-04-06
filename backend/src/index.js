const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors({
   // origin:'http://meuapp.com'
}));
app.use(express.json());//Antes da requisição converter o js em um array entendível pela aplicação 

//Metodos http:
//GET: busca/listar  uma informação do back-end
//POST: Criar uma informação no back-end
//PUT: Alterar uma informação no back-end
//DELETE: Deletar uma informação no back-end

//Tipos de parâmetros:
//Query: Parâmetros nomeados enviados pela rota após o símbolo de "?"
//Routes: Parâmetros utilizados para identificar recursos
//Request Body: corpo da requisição

//Query Buider (knex): table('users').select('*').where()

app.use(routes);

app.listen(3333);