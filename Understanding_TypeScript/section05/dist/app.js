"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static crateEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfometion() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
console.log("-------------------------------------");
const employee1 = Department.crateEmployee("Dominic");
console.log(employee1, Department.fiscalYear);
console.log("-------------------------------------");
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log('IT部門 - ID:' + this.id);
    }
}
const it = new ITDepartment("d1", ["Letty"]);
console.log(it);
it.describe();
class AccountingDepatment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = this.reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error(`レポートが見つかりません`);
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("正しい値を設定してください");
        }
        this.addReport(value);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    static getInstance() {
        if (this.instance) {
            this.instance;
        }
        this.instance = new AccountingDepatment('d2', []);
        return this.instance;
    }
    describe() {
        console.log("会計部門 - ID:" + this.id);
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
const accounting1 = AccountingDepatment.getInstance();
const accounting2 = AccountingDepatment.getInstance();
console.log(accounting1, accounting2);
console.log("-------------------------------------");
accounting1.addReport("hello there");
console.log(accounting1.mostRecentReport);
console.log("-------------------------------------");
accounting1.mostRecentReport = "通期会計レポート";
accounting1.addEmployee("Letty");
accounting1.addEmployee("Roman");
accounting1.describe();
console.log("-------------------------------------");
//# sourceMappingURL=app.js.map