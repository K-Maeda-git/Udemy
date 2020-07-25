"use strict";
let user1;
user1 = {
    name: "Max",
    age: 30,
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
};
user1.greet("Hello I am");
console.log("----------------------------------------------------------");
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log("Hi!");
        }
    }
}
let user2;
user2 = new Person();
user2.greet("Hello I am");
console.log(user2);
console.log("----------------------------------------------------------");
//# sourceMappingURL=app.js.map