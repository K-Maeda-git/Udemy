// クラスの利用について-------------------------------------
class Department {
  // private id:string;
  // // [修飾子]何も指定しない場合はpublicとなりクラス外からのアクセスが可能
  // name: string;
  // // [修飾子]privateとすることでクラス外部からのアクセスを拒否する
  // private employees: string[] = [];
  // [修飾子]protectedとすることで親クラスとサブクラスで利用することができる
  protected employees: string[] = [];

  // // フィールド（上記で作成したnameなど）の初期値を取得する
  // constructor(n: string) {
  //   this.name = n;
  // }

  // 上記のフィールド定義と初期化を一つにまとめる
  // 修飾子の[public]は省略不可
  // [readonly：読み取り専用]一度初期値を設定されたあとの変更を加えようとしたものをエラー表示する
  constructor(private readonly id: string, public name: string) {}

  // // メソッドの追加
  describe(this: Department) {
    // メソッドの中身を記述
    // console.log(`Department:` + this.name); // this.nameとすることで「accounting」を参照している
    console.log(`Department:${this.id}: ${this.name}`);
  }

  // 従業員（employees）を追加するためのメソッド
  addEmployee(employee: string) {
    // this.id = 'd2'; // readonlyのため変更は許されていない
    this.employees.push(employee);
  }
  //従業員の情報を出力するためのメソッド
  printEmployeeInfometion() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// コンストラクターを呼び出している
const accounting = new Department(`d1`, `会計`);
console.log(accounting);
accounting.describe();

// const accountingCopy = { name: "DUMY", describe: accounting.describe };
// accountingCopy.describe();

console.log("-------------------------------------");
// 従業員を2人追加（Dom,Braian）
accounting.addEmployee("Dominic");
accounting.addEmployee("Brian");
// 従業員の情報を出力
accounting.printEmployeeInfometion();

console.log("-------------------------------------");
// クラスの継承------------------------------------------------
// [継承]extendsの後ろに継承したいクラス名を記載する
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    // [super]サブクラスでコンストラクターを用いて情報を追記する場合は親クラスにもその情報を渡す必要がある
    super(id, "IT");
    // [this]を使う場合はその前にsuperを使う必要がある
    this.admins = admins;
  }
}
const it = new ITDepartment("d1", ["Letty"]);
console.log(it);
it.describe();
console.log("-------------------------------------");
// [継承]練習
class AccountingDepatment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "accounting");
  }
  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === "Letty") {
      return;
    }
    // Departmentクラスのemployeesプロパティはprotectedなのでアクセスすることができる
    this.employees.push(name);
  }
}
const accountingDM = new AccountingDepatment("d2", []);
accountingDM.addReport("hello there");
accountingDM.printReports();
// [Letty]はif文で書かれている通り何もせずreturnされる
accountingDM.addEmployee("Letty");
accountingDM.addEmployee("Roman");

accountingDM.printEmployeeInfometion();
console.log("-------------------------------------");
// ------------------------------------------------
