// const axios = require('axios');
const express = require('express');
const app = express();

const client = require('../connection.js')
let router = express.Router()


router.route('/')
    .get((req, res)=>{
        console.log("get request for subscriber route")
        return res.status(200).json("results.rows")

    })
    .post((req, res)=>{
        console.log("post request for subscriber route")
        addNewSubscriber(req, res)
    })

const addNewSubscriber = (request, response) => {
    console.log(
        "PARTY TIME========"
    )
    // console.log(request)
    console.log(request.body)

    console.log(request.query)
    response.json("message: Form submtted")
    // response.end()
// documentation - https://node-postgres.com/

// const query = {
//     text: 'INSERT INTO subscribers(firstname, lastname, email) VALUES($1, $2, $3)',
//     values: ['', '', ''],
//   }
}

module.exports = router;
