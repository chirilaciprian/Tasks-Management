const express = require("express");
const TaskModel = require("./Models/Task");
const mongoose = require("mongoose");
const routes = require("./Routes/TaskRoute");

const app = express();
const cors = require("cors");
app.use(cors({
  origin:"*",
}));
app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log("Connected to db"))
  .catch((err) => console.error(err));

app.use(routes)

app.listen(3000, () => console.log("Server is running on port 3000"));
