const { PORT } = require("./config/config.js");
const express = require("express");
const server = express();
const { db } = require("./config/database");

db.authenticate().then(()=> {
    console.log("Database is connected");
    server.listen(PORT, () => {
        console.log(`The server is listening on port ${PORT}`);
    });
});
