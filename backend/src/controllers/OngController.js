const crypto = require('crypto'); //gera um string aleatoria
const connection = require('../database/connections');

module.exports = {
    async index(request, response) { //serve para listar tds ongs do banco de dados
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },

    async create(request, response) {
        //const params = request.query; //para acessar todos parâmetros da query.
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.pseudoRandomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        return response.json({ id });
    }
}