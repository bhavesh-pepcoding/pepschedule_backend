import * as Knex from "knex";
import { timestamps } from '../helpers';


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('applications', function (table) {
        table.bigIncrements('id');
        table.integer('userId').index().notNullable();
        table.string('jobId').index().notNullable();
        table.unique(['userId','jobId']);
        timestamps(knex, table);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('applications');
}

