//Importing required packaging
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

//Importing mongodb connection features
const db = require('./db')

//Importing router module, that need to be execute
const createBookRouter = require('./routes/create_books')

//executes the express function by calling express funcion
const app = express()

//Formating all data into JSON from datase
app.use(bodyParser.json())

//Allow web browser from making an API request from one domain to other
app.use(cors())

//Creating API path for addbook
app.use('/api',createBookRouter)

//Setting port number
const port = process.env.PORT || 5000

app.listen(port,() => {
    console.log(`Server is running on - http://localhost:${port}`)
})

