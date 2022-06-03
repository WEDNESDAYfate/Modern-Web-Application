const gamesDate = require("../data/games.json");
//const path 
const getAll = function (req, res) {
    console.log("Get all games");
    let count = 5;
    let affset = 0;
    if (req.query && req.query.count) {
        count = parseInt(req.query.count);
    }
    if (req.query && req.query.count) {
        offset = parseInt(req.query.offset);
    }
    // console.log("count", count, "offset", offset);
    const pageGames = gamesDate.slice(offset, offset + count);
    const gamesCollection = db.collection(process.env)
    res.status(200).json(pageGames);
};

const getOne = function (res, res) {
    console.log("Get one game");
    const index = req.params.gameIndex;
    res.status(200).json(gameDate[index]);
};

module.exports = {
    getAll,
    getOne,
};