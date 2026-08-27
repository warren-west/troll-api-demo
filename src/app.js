const express = require("express");
const trollsRouter = require("./routes/trolls");

const app = express();


app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Troll API!" });
});

app.get("/health", (req, res) => {
  res.json({
    uptime: process.uptime(),
    nodeVersion: process.version,
    timestamp: new Date().toISOString(),
    status: "ok",
    secretMessage: process.env.SECRET_MESSAGE,
  });
});

app.use("/trolls", trollsRouter);


module.exports = app