const express = require('express')
const app = express()
const port = 6500


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/topbookstomovies', (req, res)=>{
    return res.send;
})