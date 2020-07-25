"use strict";
var _a;
const e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
console.log("----------------------------------------------------------");
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log(emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Privileges: " + emp.startDate);
    }
}
printEmployeeInformation(e1);
printEmployeeInformation({ name: "letty", startDate: new Date() });
console.log("--------------------------------------------------------");
class Car {
    drive() {
        console.log("車を運転中...");
    }
}
class Truck {
    drive() {
        console.log("トラックを運転中...");
    }
    loadCargo(amount) {
        console.log("荷物を載せています" + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
console.log("-------------------------------------------------------");
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log("移動速度：" + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 10 });
moveAnimal({ type: "horse", runningSpeed: 20 });
console.log("-------------------------------------------------------");
const userInputElement = document.getElementById("user-input");
if (userInputElement) {
    userInputElement.value = "Hello";
}
const errorBag = {
    email: "正しいメールアドレスではありません",
    username: "ユーザー名に記号を含めることはできません",
};
function add2(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add2("Hello", "TypeScript");
result.split(" ");
const fetchedUserData = {
    id: "u1",
    name: "user1",
    job: {
        title: "Developer",
        description: "TypeScript",
    },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
console.log("-------------------------------------------------------");
const userInput = ' ';
const storedDate = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log(storedDate);
//# sourceMappingURL=app.js.map