import * as Knex from 'knex';
import { timestamps } from '../helpers';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', function (table) {
        table.bigIncrements('id');
        table.uuid('uuid').index();
        table
            .string('email')
            .index()
            .unique();
        table.string('password').notNullable();
        table.string('salt').notNullable();
        table.integer('type').notNullable();
        table.string('firstName').notNullable();
        table.string('lastName').notNullable();
        timestamps(knex, table);
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('users');
}
