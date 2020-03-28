
exports.up = function(knex) { //metado up responsavel pela criação da tabela.
   return knex.schema.createTable('ongs', function(table){
        table.string('id').primary(); //sera a chave primaria do banco
        table.string('name').notNullable(); //nome do campo
        table.string('email').notNullable(); //nome do campo
        table.string('whatsapp').notNullable(); //nome do campo
        table.string('city').notNullable(); //nome do campo
        table.string('uf', 2).notNullable(); //nome do campo //segundo caracte significa tamanho do texto.
    });
  
};

exports.down = function(knex) { //metado usado se precisar voltar atrás.
    return knex.schema.dropTable('ongs'); // usado para excluir a tabela.
  
};
