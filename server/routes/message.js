const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {
    res.json({
        message: "What are you doing today?",
    });
});

module.exports = router;