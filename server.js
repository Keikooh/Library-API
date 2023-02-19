const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const routes = require('./routes')
const cors = require('cors')

const app = express()
app.use(cors())

app.set('port', process.env.PORT || 9000)
const dbOptions= {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'library'
}

// middlewares --------------------------------------------

app.use(myconn( mysql, dbOptions, 'single'))
app.use(express.json())

// routes -------------------------------------------------
app.get('/', (req, res) =>{
    res.send('welcome to my API')
})

app.use('/api',routes)

// Server running -----------------------------------------
app.listen(app.get('port'), ()=> {
    console.log('server running on port ', app.get('port'))
})