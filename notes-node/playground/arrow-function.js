var square = (x) => {
    var result = x*x;
    return result;
};
console.log(square(9));


var square2 = (x) => x*x;
console.log(square2(8));

var square3 = x => x*x;   //only one argument
console.log(square3(7));


var user = {
    name: 'Andrew',
    sayHi: () => {
        console.log(arguments);   // wrong
        console.log(`Hi. I'm ${this.name}`);   // wrong
    },
    sayHiAlt () {                                       // ES6 syntax
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};

// user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);