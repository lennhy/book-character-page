const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const client = require('./connection.js')
const app = express();

// const bodyParser = require("body-parser");
// app.use(bodyParser.json());


const getbookData = (url) =>{
    axios.get(url)
    .then(res=>{
        const $ = cheerio.load(res.data) // Use cheerio dom API that is similar to jquery to origanize html into dom elements
        let books = []
        let book;
        $('tr[itemscope]').each((index, element) => {
            book = {} // create new book object to add to books array
            book.title =  $(element).find(".bookTitle span[itemprop='name']").text()
            book.description =  $(element).find(".bookTitle span[itemprop='name']").text()
            book.author = $(element).find(".authorName span[itemprop='name']").text()
            book.review =  $(element).find("span.minirating").text()
            books.push(book)
        })
        client.query(`CREATE TABLE IF NOT EXISTS subscribers (
            id SERIAL PRIMARY KEY,
            first_name VARCHAR(100),
            last_name VARCHAR(100),
            email VARCHAR(100),
            subscribe_date DATE NOT NULL
         );`)
        // client.query(`
        // return books
        console.log(books)
        console.log("End of Page >>>>>>>>>>>>>>>>>>>>>>>>>>>.")
    })
    .catch(err => console.error(err))
}

getbookData("https://www.goodreads.com/list/show/14220.IMDB_250")
getbookData("https://www.goodreads.com/list/show/14220.IMDB_250?page=2")



  