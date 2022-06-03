// const talk = require("./talk");
// talk.greeting("Zaya");
// talk.intro();

const question = require("./talk/question");
const answer = question.ask("What is the meaning of life?");
console.log(answer);
