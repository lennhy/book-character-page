require('dotenv').config()

const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const client = require('./connection.js')
const app = express();


const getbookData = (url) =>{
    axios.get(url)
    .then(res=>{
        const $ = cheerio.load(res.data) // Use cheerio dom API that is similar to jquery to origanize html into dom elements
        let books = []
        let book;
        $('tr[itemscope]').each((index, element) => {
            book = {} // create new book object to add to books array
            book.title =  $(element).find(".bookTitle span[itemprop='name']").text()
            book.author = $(element).find(".authorName span[itemprop='name']").text()
            book.review =  $(element).find("span.minirating").text()
            books.push(book)
        })
        // --------- Insert data key pair values into database
        books.forEach((bk, i)=>{
            console.log(typeof bk.review)
            const text = `INSERT INTO ${process.env.DB_TABLE} (title, author,review) VALUES($1, $2, $3)`
            const values = [`${bk.title}`, `${bk.author}`, `${bk.review}`]
            console.log(values)
            const res =  client.query(text, values)
        })

        console.log("End of Page >>>>>>>>>>>>>>>>>>>>>>>>>>>.")
    })
    .catch(err => console.error(err))
}

getbookData("https://www.goodreads.com/list/show/14220.IMDB_250")
getbookData("https://www.goodreads.com/list/show/14220.IMDB_250?page=2")



  