require('dotenv').config()
console.log(process.env)
const client = require('./connection.js')



client.query(`CREATE TABLE IF NOT EXISTS subscribers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100),
    subscribe_date DATE NOT NULL
 );`)

 client.query(`CREATE TABLE IF NOT EXISTS topbooks (
  name VARCHAR(100),
  reviews INT,
  author VARCHAR(50),
  description VARCHAR(255)
);`)

 console.log(" DONE")

//  client.end()