const express = require("express");

app = express();
app.set("view engine", "ejs");
app.use("/public", express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require("./routes/index");
const tabliczkamnozenia = require("./routes/tabliczkamnozenia");
const stoliceeuropy = require("./routes/stoliceeuropy");
const geografiaogolna = require("./routes/geografiaogolna");
const flagsRouter = require("./routes/flags");
const comeingsoon = require("./routes/comeingsoon");

app.use("/", indexRouter);
app.use("/tabliczkaMnozenia", tabliczkamnozenia);
app.use("/stolice", stoliceeuropy);
app.use("/geografia", geografiaogolna);
app.use("/flags", flagsRouter);
app.use("/comeing-soon", comeingsoon);

app.listen(8080);
