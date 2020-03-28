const express = require('express'); //importa as funcionalidades do express para a varial express.
const cors = require('cors');
const routes = require('./routes');

const app = express(); // variavel de aplicação. (Rotas entre outras).

app.use(cors());
app.use(express.json()); // utilizado para transfomar as requisição em aplicação json;
app.use(routes);

app.listen(3333); //é usado para definir qual porta será usada a aplicação.