"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department:${this.id}: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfometion() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department(`d1`, `会計`);
console.log(accounting);
accounting.describe();
console.log("-------------------------------------");
accounting.addEmployee("Dominic");
accounting.addEmployee("Brian");
accounting.printEmployeeInfometion();
console.log("-------------------------------------");
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
const it = new ITDepartment("d1", ["Letty"]);
console.log(it);
it.describe();
console.log("-------------------------------------");
class AccountingDepatment extends Department {
    constructor(id, reports) {
        super(id, "accounting");
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name === "Letty") {
            return;
        }
        this.employees.push(name);
    }
}
const accountingDM = new AccountingDepatment("d2", []);
accountingDM.addReport("hello there");
accountingDM.printReports();
accountingDM.addEmployee("Letty");
accountingDM.addEmployee("Roman");
accountingDM.printEmployeeInfometion();
console.log("-------------------------------------");
//# sourceMappingURL=app.js.map