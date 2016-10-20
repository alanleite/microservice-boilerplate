
exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('customers', (table) => {
            table.increments().primary()
            table.string('sid', 14).notNullable()
            table.string('first_name').notNullable()
            table.string('last_name')
            table.string('address')
            table.string('city')
            table.string('state', 2)
            table.string('postal_code', 20)
            table.string('created_by', 14)
            table.string('updated_by', 14)
            table.string('deleted_by', 14)
            table.dateTime('created_at')
            table.dateTime('updated_at')
            table.dateTime('deleted_at')
        }),
        knex.schema.createTable('orders', (table) => {
            table.increments().primary()
            table.string('sid', 14).notNullable()
            table.integer('customer_id')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('customers')
            table.dateTime('order_date').notNullable()
            table.dateTime('shippedDate')
            table.string('ship_address')
            table.string('ship_city')
            table.string('ship_state', 2)
            table.string('ship_postal_code', 20)
            table.string('created_by', 14)
            table.string('updated_by', 14)
            table.string('deleted_by', 14)
            table.dateTime('created_at')
            table.dateTime('updated_at')
            table.dateTime('deleted_at')
        })
    ])
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('orders'),
        knex.schema.dropTable('customers')
    ])
};
