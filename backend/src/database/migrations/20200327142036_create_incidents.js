
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments(); //sera criado uma chave primaria automaticamente
        table.string('title').notNullable(); //nome do campo
        table.string('description').notNullable(); //nome do campo
        table.decimal('valur').notNullable(); //nome do campo

        table.string('ong_id').notNullable(); //criado para armazenar a ong (relacionamento)
    
        table.foreign('ong_id').references('id').inTable('ongs'); //chave estrangeira
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
