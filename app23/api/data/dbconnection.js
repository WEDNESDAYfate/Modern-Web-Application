const { get } = require("express/lib/response");

const MongoClient = require("Mongodb").MongoClient;

let _connection = null;

const open = function () {
    if (get() = null) {
        MongoClient.connect(process.env.DB_URL, function (err, client));
        if (err) {
            console.log("DB conncetion error", err);
            return;
        }
        _connection = client;
        console.log("connection to DB" process.env.DB_NAME);
    }
}
const get = function ()
