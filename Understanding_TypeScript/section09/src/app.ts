// Validation
interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

function validate(validatableInput: Validatable) {
  let isValid = true;
  if (validatableInput.required) {
    // 必須チェック
    isValid = isValid && validatableInput.value.toString().trim().length != 0;
  }
  if (
    validatableInput.minLength != null &&
    typeof validatableInput.value === "string"
  ) {
    // 最小文字数のチェック
    isValid =
      isValid && validatableInput.value.length >= validatableInput.minLength;
  }
  if (
    validatableInput.maxLength != null &&
    typeof validatableInput.value === "string"
  ) {
    // 最大文字数のチェック
    isValid =
      isValid && validatableInput.value.length <= validatableInput.maxLength;
  }
  if (
    validatableInput.min != null &&
    typeof validatableInput.value === "number"
  ) {
    // 最小値のチェック
    isValid = isValid && validatableInput.value >= validatableInput.min;
  }
  if (
    validatableInput.max != null &&
    typeof validatableInput.value === "number"
  ) {
    // 最大値のチェック
    isValid = isValid && validatableInput.value <= validatableInput.max;
  }
  return isValid;
}

// autobind decorator
function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  // オリジナル関数の取得
  const originalMethod = descriptor.value;
  // 設定変更後のディスクリプターを作成
  const adjDescripor: PropertyDescriptor = {
    // ディスクリプターの設定
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  // 新しいディスクリプターを返す
  return adjDescripor;
}

// ProjectInput class
class ProjectInput {
  // プロパティの追加
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  mandayInputElement: HTMLInputElement;

  constructor() {
    // テンプレート要素への参照
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement; //[HTMLTemplateElement]を型キャスト
    // テンプレートを表示する親要素への参照
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    // テンプレートをインポート
    // importNodeメソッドを使ってテンプレートの内容をインポートしている
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    // インポートしたテンプレートの最初の子要素を格納している（ここではフォーム）
    this.element = importedNode.firstElementChild as HTMLFormElement;
    // DOMの要素にアクセスしてidを与えることでcssを適用している？
    this.element.id = "user-input";

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
    this.attach();
  }

  // 入力値を受け取るメソッド
  private gatherUserInput(): [string, string, number] | void {
    // 各項目の入力値を取得
    const enteredTitle = this.titleInputElement.value;
    const enteredDescripor = this.descriptionInputElement.value;
    const enteredManday = this.mandayInputElement.value;

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
    };
    const descriptorValidatable: Validatable = {
      value: enteredDescripor,
      required: true,
      minLength: 5,
    };
    const mandayValidatable: Validatable = {
      value: +enteredManday,
      required: true,
      min: 1,
      max: 1000,
    };
    // 入力値のチェック
    if (
      //   // 各項目の空白チェック
      //   enteredTitle.trim().length === 0 ||
      //   enteredDescripor.trim().length === 0 ||
      //   enteredManday.trim().length === 0
      // 上記の改善Ver
      !validate(titleValidatable) ||
      !validate(descriptorValidatable) ||
      !validate(mandayValidatable)
    ) {
      alert("入力値が正しくありません。再度お試しください。");
      return;
    } else {
      return [enteredTitle, enteredDescripor, +enteredManday];
    }
  }

  // サブミットしたら入力欄をクリアするメソッド
  private clearInputs() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.mandayInputElement.value = "";
  }

  @autobind
  // イベントのオブジェクトを受け取る
  private submitHandler(event: Event) {
    // フォームに入力された内容を取得
    event.preventDefault(); // フォームからHTTPリクエストが送られないようにしている
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, manday] = userInput;
      console.log(title, desc, manday);
      this.clearInputs();
    }
  }

  // メソッドの追加
  private configure() {
    // イベントリスナーの設定
    // フォームがsubmitされたらsubmitHandlerが呼ばれる
    // this.element.addEventListener("submit", this.submitHandler.bind(this));
    this.element.addEventListener("submit", this.submitHandler);
  }

  // メソッドの作成
  private attach() {
    // hostElementに要素を追加する
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

// インスタンス作成
const prjInput = new ProjectInput();

// ("-------------------------------------------------------");
