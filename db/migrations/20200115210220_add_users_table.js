
exports.up = (knex) => {
    return knex.schema
        .createTable('users', function (table) {
            table.increments('id');
            table.string('email', 255).notNullable();
            table.string('first_name', 255).notNullable();
            table.string('last_name', 255).notNullable();
        })
};

exports.down = (knex) => {
    return knex.schema
        .dropTable("users");
};
