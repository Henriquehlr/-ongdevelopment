const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development); //define qual tipo de conexão sera usada.

module.exports = connection; //exportação do banco de dados.