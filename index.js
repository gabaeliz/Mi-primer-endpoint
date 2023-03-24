const { PORT } = require("./config/config")
const express = require("express");
const server = express();

server.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});


