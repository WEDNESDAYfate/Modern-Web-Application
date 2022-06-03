const express = require("express");
const path = require("path");
const gamesController = require("../controllers/game.controller");

const router = express.Router();

router.route("/game").get(gamesController.getAll);
router.route("/games/:gameIndex").get(gamesController.getOne);

router.route("/file").get(function (req, res) {
    console.log("file recieved");
    res.status(200).sendFile(path.join(__dirname, "index.js"));
});

module.exports = router;

