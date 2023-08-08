require('dotenv').config()
const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: process.env.DB_USER,
    port: 5432,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

module.exports = client

client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

// client.end() 