const express = require('express');
const app = express();

const client = require('../connection.js')
let router = express.Router()

// ------------ Call route when retreiving data from the database for the frontend to consume
router.route('/')
    .get((req, res)=>{
        return res.status(200).json("results.rows")

        // getTopBooks(req, res)
    })

const getTopBooks = (request, response) => {
    console.log('topbooks route ~~~~~~~~~~~~~~~~~~~~~~~')

    // Callback style
    client.query("SELECT * FROM topbooks;", (error, results) =>{
        if (error) {
            throw error
            }
        console.log(typeof results.rows)
        response.status(200).json(results.rows)
    })
}




module.exports = router;
