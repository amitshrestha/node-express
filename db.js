var DATABASE_URL = 'postgres://postgres:testpassword@localhost/test';
const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:testpassword@localhost/test';

var client = new pg.Client(connectionString);
client.connect();