const express = require("express");
const crypto = require("crypto");
const app = express();
const Worker = require("worker_threads").Worker;

app.get("/", (req, res) => {
  // it use's the node worker thread anyways
  // crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  //   res.send("Hi There");
  // });

  const worker = new Worker("./worker.js");

  worker.on("message", function (message) {
    console.log(message);
    res.send(`Hi There, ${message} iterations!`);
  });
  worker.postMessage("start!");
});

app.get("/fast", (req, res) => {
  res.send("This was fast");
});

app.listen(3000);
