const express = require("express");
const genres = require("./routes/genres");

const app = express();
app.use(express.json());
app.use("/api/genres", genres);

app.listen(3001, () => console.log("Listening on port 3001..."));
