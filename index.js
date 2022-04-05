const express = require("express");
const apiRouter = require("./api");

const server = express();

server.use("/api", apiRouter);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => console.log("server is up on port: " + PORT));
