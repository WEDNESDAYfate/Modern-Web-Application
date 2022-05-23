console.log("1: start app");
const lateWork = setTimeout(function () {
    console.log("2: In setTimeout");
}, 2000);
console.log("3: end app");

//const clearTimeout= setTimeout(function());
clearTimeout(lateWork);
