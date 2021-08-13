
exports.up = function (knex) {
    return knex.schema.createTable('tb_projeto', (table) => {
        table.increments('id_projeto')
        table.text('no_projeto')
        table.text('ds_projeto')
        table.bigInteger('id_user_owner')
        table.integer('status')

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('tb_projeto')
};
