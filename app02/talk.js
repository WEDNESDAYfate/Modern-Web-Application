module.exports = function () {
    console.log("Goodbye");
}

const filename = "talk.js";
const goodbye = function () {
    console.log("Goodbye");


}

const intro = function () {
    console.log("I'm a node file called", filename);

}

const Hello = function () {
    console.log("Hello");

}

module.exports = {
    goodbye,

}