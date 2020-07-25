// クラスの利用について-------------------------------------
// [abstract]抽象クラス（※インスタンス化不可継承するためのクラス）
abstract class Department {
  // [static]クラスに静的メソッドを定義する（インスタンスからは呼び出せない）
  // 呼び出すときはクラスを直接指定して呼び出す
  static fiscalYear = 2020;
  // private id:string;
  // // [修飾子]何も指定しない場合はpublicとなりクラス外からのアクセスが可能
  // name: string;
  // // [修飾子]privateとすることでクラス外部からのアクセスを拒否する
  // private employees: string[] = [];
  // [修飾子]protectedとすることで親クラスとサブクラスで利用することができる
  protected employees: string[] = [];

  // [static]クラスに静的メソッドを定義する（インスタンスからは呼び出せない）
  static crateEmployee(name: string) {
    return { name: name };
  }

  // // フィールド（上記で作成したnameなど）の初期値を取得する
  // constructor(n: string) {
  //   this.name = n;
  // }

  // 上記のフィールド定義と初期化を一つにまとめる
  // 修飾子の[public]は省略不可
  // [readonly：読み取り専用]一度初期値を設定されたあとの変更を加えようとしたものをエラー表示する
  constructor(protected readonly id: string, public name: string) {}

  // // メソッドの追加
  // [abstract]抽象メソッド
  abstract describe(this: Department): void;
  //  {
  //   // メソッドの中身を記述
  //   // console.log(`Department:` + this.name); // this.nameとすることで「accounting」を参照している
  //   console.log(`Department:${this.id}: ${this.name}`);
  // }

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

console.log("-------------------------------------");
// [static]newせずに直接呼び出すことができる
const employee1 = Department.crateEmployee("Dominic");
console.log(employee1, Department.fiscalYear);

// console.log("-------------------------------------");
// Departmentクラスが抽象クラスのためコメントアウト
// // コンストラクターを呼び出している
// // const accounting = new Department(`d1`, `会計`);
// console.log(accounting);
// accounting.describe();

// // const accountingCopy = { name: "DUMY", describe: accounting.describe };
// // accountingCopy.describe();

// console.log("-------------------------------------");
// // 従業員を2人追加（Dom,Braian）
// accounting.addEmployee("Dominic");
// accounting.addEmployee("Brian");
// // 従業員の情報を出力
// accounting.printEmployeeInfometion();

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

  describe() {
    console.log('IT部門 - ID:'+ this.id);
  }

}
const it = new ITDepartment("d1", ["Letty"]);
console.log(it);
it.describe();

// [継承]練習
class AccountingDepatment extends Department {
  private lastReport: string; // 最新のレポートを保持しておくためのプロパティ
  // クラス内でのみアクセス可能
  private static instance:AccountingDepatment; // AccountingDepatmentのインスタンスを格納する

  // ---------------------------------------------------------------------
  // ロジックをプロパティの中にカプセル化してそのプロパティを取得したり設定したりする
  // [ゲッター]ある属性の値を取得するメソッド（ここではlastReportを設定）
  get mostRecentReport() {
    // lastReportがnullまたはundfindでなければlastReportを返す
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error(`レポートが見つかりません`);
  }
  // [セッター]ある属性に値を設定するメソッド（ここではaddReportを設定）
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("正しい値を設定してください");
    }
    this.addReport(value);
  }
  // ---------------------------------------------------------------------
  // シングルトンパターン
  // [private]とすることでクラスの外でnewでオブジェクト作れないようにすることができる
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = this.reports[0]; // 初期値として[0]番目のレポートの要素を格納
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  static getInstance() {
    // this.はクラスを指す
    if(this.instance) {
      this.instance;
    }
    this.instance = new AccountingDepatment('d2',[])
    return this.instance;
  }

  // 独自のメソッドを作る（親クラスにないもの）\
  describe() {
    console.log("会計部門 - ID:" + this.id);
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
// コンストラクターがpraivateのためエラーとなる
// const accountingDM = new AccountingDepatment("d2", []);
const accounting1 = AccountingDepatment.getInstance();
const accounting2 = AccountingDepatment.getInstance();
console.log(accounting1,accounting2);

console.log("-------------------------------------");

// レポート追加前にlastReportを呼び出す処理を実行
// console.log(accountingDM.mostRecentReport); // エラーが表示される
// レポートを追加する処理
accounting1.addReport("hello there");
// レポート追加後にlastReportを呼び出す処理を実行
console.log(accounting1.mostRecentReport);

console.log("-------------------------------------");

// 空の値を渡したときのaddReportの処理
// accountingDM.mostRecentReport = ""; // エラーが表示される
// 値が入っている状態で渡したときのaddReportの処理
accounting1.mostRecentReport = "通期会計レポート";

// [Letty]はif文で書かれている通り何もせずreturnされる
accounting1.addEmployee("Letty");
accounting1.addEmployee("Roman");

// accountingDM.printEmployeeInfometion();
// accountingDM.printReports();
accounting1.describe();

console.log("-------------------------------------");

// ------------------------------------------------
