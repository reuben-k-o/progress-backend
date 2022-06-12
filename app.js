const path = require("path");
const express = require("express");

const rootDir = require("./util/path");
const authRoute = require("./routes/auth");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(rootDir, "public")));

app.use(authRoute);

app.listen(4500);
