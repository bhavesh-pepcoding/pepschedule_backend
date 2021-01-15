import * as Knex from "knex";
import { timestamps } from '../helpers';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('jobs', function (table) {
        table.bigIncrements('id');
        table.uuid('uuid').index();
        table.integer('userId').index().notNullable();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('company_name').notNullable();
        table.integer('salary').notNullable();
        table.string('location').notNullable();
        table.integer('type').notNullable();
        timestamps(knex, table);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('jobs');
}

