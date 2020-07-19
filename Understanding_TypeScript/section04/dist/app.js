"use strict";
const userName = `Max`;
let age = 20;
age = 30;
const add = (a, b = 2) => a + b;
const printOutput = (output) => {
    console.log(output);
};
printOutput(add(2));
const button = document.querySelector(`button`);
if (button) {
    button.addEventListener(`click`, (event) => {
        console.log(event);
    });
}
const hobbies = [`sports`, `cooking`];
console.log(`hobbies:` + hobbies);
const activeHobbies = [`haiking`];
console.log(`activeHobbies:` + activeHobbies);
activeHobbies.push(...hobbies);
console.log(`activeHobbies:` + activeHobbies);
console.log(`------------------------------------------------------`);
const person = {
    name: `Max`,
    age: 20,
};
console.log(`person:` + person.name + person.age);
const copiedPerson = Object.assign({}, person);
console.log(`copiedPerson:` + copiedPerson.name + copiedPerson.age);
console.log(`------------------------------------------------------`);
const add2 = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumber = add2(5, 3, 10, 3.4, 3.6);
console.log(addedNumber);
console.log(`------------------------------------------------------`);
const musicCategory = [`pop`, `rock`, `jazz`, `edm`];
const pc = {
    cpu: `Ryzen5_1600AF`,
    gpu: `1660super`,
    ram: `16GB`,
    ssd: `500GB`,
};
const [mCategory1, mCategory2, ...category] = musicCategory;
console.log(musicCategory, mCategory1, mCategory2, category);
const { cpu, gpu, ram, ssd: m2 } = pc;
console.log(pc, cpu, gpu, ram, m2);
//# sourceMappingURL=app.js.map