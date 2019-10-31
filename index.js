const express = require("express");
require('dotenv').config();

const server = express();

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello Web23'})
})

const port = process.env.PORT || 4000;
// port will be set by heroku after deployment 


server.listen(port, () => console.log(`\n === Server listening on port ${port} === \n`))