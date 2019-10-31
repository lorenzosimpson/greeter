const express = require("express");

const server = express();

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello Web23'})
})

server.listen(4000, () => console.log('\n === Server listening on port 4000 === \n'))