process.env.UV_THREADPOOL_SIZE = 2;

const crypto = require("crypto");

const clustor = require("cluster");

// Is the file being executed in master mode?
if (clustor.isMaster) {
  // Cause index.js to be executed *again* but in child mode
  clustor.fork();
  // clustor.fork();
  // clustor.fork();
  // clustor.fork();
} else {
  // Im a child, Im going to act lke a server and do nothing else
  const express = require("express");
  const app = express();

  app.get("/", (req, res) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        res.send("Hi There");
    });
  });

  app.get("/fast", (req, res) => {
    res.send("This was fast");
  });

  app.listen(3000);
}
