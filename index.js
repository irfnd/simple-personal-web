const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const app = express();
const routes = require("./routes/routes");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use("/assets", express.static(path.join(__dirname, "public")));
app.use("/", routes);

app.listen(process.env.PORT, () => console.log("> Server Running"));
