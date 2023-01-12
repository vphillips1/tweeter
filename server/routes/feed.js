const express = require("express");
const router = express.Router();
const axios = require("axios");

let feeds = []
//Create
router.post("/", (req, res)=> {
    const newTweet = {
        name: req.body.name,
        handler: "@dev_kia",
        title: req.body.tweetMessage,
        profileImg: feed.data[0].profileImg,
        tweetImg: feed.data[2].tweetImg,
    };
    feeds.push(newTweet);
    res.json(feeds);
});
// router.post("/", async (req, res) => {
//   res.json({
//     hi: "post created",
//   });
// });

//Update
router.put("/", async (req, res) => {
  res.json({
    hi: "post updated",
  });
});

//Read
router.get("/", async (req, res) => {
  const feeds = await axios.get(
    "https://mpb-site.s3.us-east-2.amazonaws.com/tweeter.json"
  );
  res.json(feeds.data);
});

//Delete
router.delete("/", async (req, res) => {
  res.json({
    hi: "post delete",
  });
});

module.exports = router;
