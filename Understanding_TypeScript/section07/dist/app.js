"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);
console.log(mergedObj.name);
console.log(mergedObj.hobbies);
console.log(mergedObj.age);
console.log("-------------------------------------------------------");
function countAndDescribe(element) {
    let descriptionText = "値がありません";
    if (element.length > 0) {
        descriptionText = "値は" + element.length + "個です。";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("お疲れ様です"));
console.log(countAndDescribe(["Sport", "Cooking"]));
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
extractAndConvert({ name: "Max" }, "name");
console.log("-------------------------------------------------------");
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItem() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
const numberStorage = new DataStorage();
const strANDnumStorage = new DataStorage();
textStorage.addItem("Data1");
textStorage.addItem("Data2");
textStorage.removeItem("Data1");
console.log(textStorage.getItem());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntile = date;
    return courseGoal;
}
const names = ["Max,Anna"];
console.log("-------------------------------------------------------");
//# sourceMappingURL=app.js.map