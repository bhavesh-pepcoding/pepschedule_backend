import * as Knex from "knex";
import { v4 as uuidv4 } from 'uuid';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    // Inserts seed entries
    await knex("users").insert([
        { uuid: uuidv4(), email: "bansalbhavesh14@gmail.com", type: 3, first_name: 'Bhavesh', last_name: 'Bansal', password: '$2a$10$bwgYMNpHsJfTjDMo9ilHRepDLdtx0vUedamMBxcQgu0Vqj9R2tzDS', salt: '$2a$10$bwgYMNpHsJfTjDMo9ilHRe'}
    ]);
};
