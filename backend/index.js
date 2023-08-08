const express = require('express')
const app = express()
const port = 6500
const topbooksApi = require('./routes/api');
// const landingPage = require('./landing');


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


app.use('/topbooks', topbooksApi);
