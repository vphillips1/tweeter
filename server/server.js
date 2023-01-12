//create the server
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const feeds = require("./routes/feed");
const messages = require("./routes/message");

const start = async () => {
  app.use(express.json());
  app.use("/api/feeds", feeds);
  app.use("/api/messages", messages);

  app.listen(port, () => {
    console.log("Server started on port", port);
  });
};

start();
