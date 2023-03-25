const { PORT } = require("./config/config");
const { db } = require("./config/database");
const routes = require("./server/routes/index");

const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors());
server.use(express.json());
server.use("/api/v1", routes);

db.sync().then(async () => {
server.listen(PORT, () => console.log(`The server is running on ${PORT} `));
});
