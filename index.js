const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const apiRouter = require("./routes/api");

mongoose
  .connect(
    "mongodb+srv://rasul8215:rasul8215@cluster0.aqrjrwk.mongodb.net/t-bills"
  )
  .then(() => console.log("Connect to Mongodb Database..."));

const server = express();
server.use(cors());
server.use(express.json());

server.use("/api", apiRouter);

server.listen(process.env.PORT ?? 3000, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
