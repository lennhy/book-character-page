// const axios = require('axios');
const express = require('express');
const app = express();

const client = require('../connection.js')
let router = express.Router()

// ------------ Call route when retreiving data from the database for the frontend to consume
router.route('/')
    .get((req, res)=>{
        getTopBooks(req, res)
    })


const getTopBooks = (request, response) => {
    client.query("SELECT * FROM topbooks;", (error, results) =>{
        if (error) {
            throw error
            }
        console.log(typeof results.rows)
        response.status(200).json(results.rows)
    })
}


module.exports = router;
