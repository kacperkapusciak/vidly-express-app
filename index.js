const mongoose = require("mongoose");
const express = require("express");
const genres = require("./routes/genres");
const customers = require("./routes/customers");
const movies = require("./routes/movies");

mongoose
  .connect("mongodb://localhost/vidly", {
    useNewUrlParser: true,
    useFindAndModify: false
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));

const app = express();
app.use(express.json());
app.use("/api/genres", genres);
app.use("/api/customers", customers);
app.use("/api/movies", movies);

app.listen(3001, () => console.log("Listening on port 3001..."));
