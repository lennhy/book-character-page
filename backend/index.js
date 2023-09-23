const express = require('express')
const app = express()
const port = 6500
const bodyParser = require('body-parser')

const topbooksApi = require('./routes/topbooks');
const subscribers = require('./routes/subscribers');
// const landingPage = require('./landing');
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000', // use your actual domain name (or localhost), using * is not recommended
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true
}))
// app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cors())


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


app.use('/topbooks', topbooksApi);
app.use('/subscribers', subscribers);
