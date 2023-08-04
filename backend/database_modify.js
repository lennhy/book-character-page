require('dotenv').config()
console.log(process.env)
const { Client } = require('pg')
const client = new Client({
  user: process.env.DB_USER,
  host: 'localhost',
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
})

client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

client.query(`CREATE TABLE IF NOT EXISTS topbooks (
    name VARCHAR(100),
    reviews INT,
    author VARCHAR(50),
    description VARCHAR(255)
 );`)
