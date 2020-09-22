const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");
const connectDB = require("./config/key");

const app = express();

// db config
const db = require("./config/key").mongoURI;
//connect to mongodb
connectDB();
// mongoose
//   .connect(db)
//   .then(() => console.log("mongodb connected"))
//   .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("hello world"));

//use routes

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));
