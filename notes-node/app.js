console.log('Starting app.js');

// require() load module
const fs = require('fs');  //File System
const os = require('os');  //Operating System
const notes = require('./notes.js');
const _ = require('lodash');

// console.log(_.isString(true));
// console.log(_.isString('true'));
var filteredArray = _.uniq(['Joe', 1, 'Joe', 1, 2, 3]);
console.log(filteredArray);

// var res = notes.add(9,-2);
// console.log(res);

// console.log('Result:', notes.add(3,5));

// var user = os.userInfo();

// // fs.appendFileSync('greeting.txt', 'Hello ' + user.username + '!');  //method 1
// fs.appendFileSync('greeting.txt', `Hello ${user.username}! You are ${notes.age}.`);  //method 2 : ES6