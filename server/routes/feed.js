const express = require("express");
const router = express.Router();
const axios = require("axios");

let feeds = [];

//Create
router.post("/", async (req, res) => {
  const newTweet = {
    name: "Kia Foley",
    handler: "@dev_kia",
    title: req.body.tweet,
    profileImg: "",
    tweetImg: "",
  };
  feeds.push(newTweet);
  res.json(feeds);
});

//Update
router.put("/:id", async (req, res) => {
  const {
    params: { id },
    body: { tweet },
  } = req;

  feeds[id] = {
    name: "Kia Foley",
    handler: "@dev_kia",
    title: tweet,
    profileImg: "",
    tweetImg: "",
  };

  res.json({
    msg: "Tweet Updated",
    data: feeds,
  });
});

//Read
router.get("/", async (req, res) => {
  const tweeterData = await axios.get(
    "https://mpb-site.s3.us-east-2.amazonaws.com/tweeter.json"
  );
  feeds = tweeterData.data;
  res.json(tweeterData.data);
});

//Delete
router.delete("/:id", async (req, res) => {
  res.json({
    msg: "Tweet has been deleted",
  });
});

module.exports = router;
