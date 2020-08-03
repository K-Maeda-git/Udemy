// 依存関係の追加
// /// <reference path="base-component.ts" />
// /// <reference path="../decorators/autobind.ts" />
// /// <reference path="../utile/validation.ts" />
// /// <reference path="../state/project-state.ts" />

// [import/export]ESモジュール
// [export default]名前付きエクスポート
import Cmp from "./base-component";
// グループ化(呼び出し時にはエイリアス名.~とする)
// import { Validatable, validate } from "../utile/validation.js";
import * as Validation from "../utile/validation";
// 名称の変更
import { autobind as Autobind } from "../decorators/autobind";
import { projectState } from "../state/project-state";

// namespace App {
// ProjectInput class(フォームの表示と入力値の取得)
export class ProjectInput extends Cmp<HTMLDivElement, HTMLFormElement> {
  // プロパティの追加
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  mandayInputElement: HTMLInputElement;

  constructor() {
    super("project-input", "app", true, "user-input");
    // // テンプレート要素への参照
    // this.templateElement = document.getElementById(
    //   "project-input"
    // )! as HTMLTemplateElement; //[HTMLTemplateElement]を型キャスト
    // // テンプレートを表示する親要素への参照
    // this.hostElement = document.getElementById("app")! as HTMLDivElement;

    // // テンプレートをインポート
    // // importNodeメソッドを使ってテンプレートの内容をインポートしている
    // const importedNode = document.importNode(
    //   this.templateElement.content,
    //   true
    // );
    // // インポートしたテンプレートの最初の子要素を格納している（ここではフォーム）
    // this.element = importedNode.firstElementChild as HTMLFormElement;
    // // DOMの要素にアクセスしてidを与えることでcssを適用している？
    // this.element.id = "user-input";

    // 入力項目の取得
    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.mandayInputElement = this.element.querySelector(
      "#manday"
    ) as HTMLInputElement;

    this.configure();
  }
  // メソッドの追加
  configure() {
    // イベントリスナーの設定
    // フォームがsubmitされたらsubmitHandlerが呼ばれる
    // this.element.addEventListener("submit", this.submitHandler.bind(this));
    this.element.addEventListener("submit", this.submitHandler);
  }

  // 抽象クラスの制約を満たすために設置
  renderContent() {}

  // 入力値を受け取るメソッド
  private gatherUserInput(): [string, string, number] | void {
    // 各項目の入力値を取得
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredManday = this.mandayInputElement.value;

    const titleValidatable: Validation.Validatable = {
      value: enteredTitle,
      required: true,
    };
    const descriptionValidatable: Validation.Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };
    const mandayValidatable: Validation.Validatable = {
      value: +enteredManday,
      required: true,
      min: 1,
      max: 1000,
    };
    // 入力値のチェック
    if (
      //   // 各項目の空白チェック
      //   enteredTitle.trim().length === 0 ||
      //   enteredDescription.trim().length === 0 ||
      //   enteredManday.trim().length === 0
      // 上記の改善Ver
      !Validation.validate(titleValidatable) ||
      !Validation.validate(descriptionValidatable) ||
      !Validation.validate(mandayValidatable)
    ) {
      alert("入力値が正しくありません。再度お試しください。");
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredManday];
    }
  }

  // サブミットしたら入力欄をクリアするメソッド
  private clearInputs() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.mandayInputElement.value = "";
  }

  @Autobind
  // イベントのオブジェクトを受け取る
  private submitHandler(event: Event) {
    // フォームに入力された内容を取得
    event.preventDefault(); // フォームからHTTPリクエストが送られないようにしている
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, manday] = userInput;
      projectState.addProject(title, desc, manday);
      this.clearInputs();
    }
  }
}
// }
