// Drag&Drop(ドラッグ＆ドロップ機能の実装)
// ドラッグできるコンポーネントのクラスに実装するインターフェイス
interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}
// ドロップできる場所
interface DragTarget {
  // ドロップする場所が有効かをブラウザに伝えるためのイベントハンドラー
  dragOverHandler(event: DragEvent): void;
  // ドロップするときのイベントハンドラー（データや画面を更新する）
  dropHandler(event: DragEvent): void;
  // ビジュアル上のフィードバッグを行うためのイベントハンドラー
  dragLeaveHandler(event: DragEvent): void;
}

// Project Type(projectsの型をクラスで定義する)
enum ProjectStatus {
  Active,
  Finished,
}

class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public manday: number,
    public status: ProjectStatus
  ) {}
}

// カスタム型（listenersの型を定義する）
type Listener<T> = (items: T[]) => void;

class State<T> {
  protected listeners: Listener<T>[] = [];
  // リスナーを追加するためのメソッド
  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}

// Project State Management（状態管理をする）
class ProjectState extends State<Project> {
  private projects: Project[] = [];
  // インスタンスを保持するためのプロパティ
  private static instance: ProjectState;

  // シングルトン
  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    // インスタンスがない場合には新規に作成
    this.instance = new ProjectState();
    return this.instance;
  }

  // リストにプロジェクトを追加するメソッド
  addProject(title: string, description: string, manday: number) {
    // 新しいプロジェクトのオブジェクトを作成
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      manday,
      // デフォルトで[Active]
      ProjectStatus.Active
    );
    // オブジェクトをリストに追加する
    this.projects.push(newProject);
    this.updateListeners();
  }

  // プロジェクトステータスを変更するメソッド
  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find((prj) => prj.id === projectId);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListeners();
    }
  }

  private updateListeners() {
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }
}

// グローバルオブジェクト
const projectState = ProjectState.getInstance();

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
    isValid = isValid && validatableInput.value.toString().trim().length !== 0;
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
  const adjDescriptor: PropertyDescriptor = {
    // ディスクリプターの設定
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  // 新しいディスクリプターを返す
  return adjDescriptor;
}

// Component Class(abstractクラス：親クラス)
abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templateId: string,
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string // 任意の引数は最後に持ってくる
  ) {
    // テンプレート要素への参照
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement; //[HTMLTemplateElement]を型キャスト
    // テンプレートを表示する親要素への参照
    this.hostElement = document.getElementById(hostElementId)! as T;

    // テンプレートをHTMLにインポート
    // importNodeメソッドを使ってテンプレートの内容をインポートしている
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    // インポートしたテンプレートの最初の子要素を格納している
    this.element = importedNode.firstElementChild as U;
    if (newElementId) {
      this.element.id = newElementId;
    }
    this.attach(insertAtStart);
  }

  abstract configure(): void;
  abstract renderContent(): void;

  // 画面に表示する処理
  private attach(insertAtBeginning: boolean) {
    // hostElementに要素を追加する
    this.hostElement.insertAdjacentElement(
      insertAtBeginning ? "afterbegin" : "beforeend",
      this.element
    );
  }
}

// ProjectItem Class(各プロジェクトをリストの項目として表示する)
class ProjectItem extends Component<HTMLUListElement, HTMLLIElement>
  implements Draggable {
  private project: Project;

  // ゲッター
  get manday() {
    if (this.project.manday < 20) {
      return this.project.manday.toString() + "人日";
    } else {
      return (this.project.manday / 20).toString() + "人月";
    }
  }

  constructor(hostId: string, project: Project) {
    super("single-project", hostId, false, project.id);
    this.project = project;

    this.configure();
    this.renderContent();
  }
  @autobind
  dragStartHandler(event: DragEvent) {
    // ドラッグイベントでデータを転送するイベント
    event.dataTransfer!.setData("text/plain", this.project.id);
    // ブラウザ上でカーソルがどのように表示されるかをコントロール
    event.dataTransfer!.effectAllowed = "move";
  }
  dragEndHandler(_: DragEvent) {
    console.log("ドラッグ終了");
  }

  configure() {
    this.element.addEventListener("dragstart", this.dragStartHandler);
    this.element.addEventListener("dragend", this.dragEndHandler);
  }

  // h2,h3,pタグを取得してテキストを設定する
  renderContent() {
    this.element.querySelector("h2")!.textContent = this.project.title;
    // ゲッター関数（get manday）が実行される
    this.element.querySelector("h3")!.textContent = this.manday;
    this.element.querySelector("p")!.textContent = this.project.description;
  }
}

// ProjectList Class(プロジェクトのリストを表示)
class ProjectList extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget {
  assignedProjects: Project[];

  constructor(private type: "active" | "finished") {
    super("project-list", "app", false, `${type}-projects`); // ベースクラスのコンストラクターを呼び出す
    // 空の配列で初期化
    this.assignedProjects = [];

    this.configure();
    this.renderContent();
  }

  @autobind
  dragOverHandler(event: DragEvent) {
    // ドラッグされたものがドラッグできる場所かを判定
    if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
      // ドロップの許可
      event.preventDefault();
      const listEl = this.element.querySelector("ul")!;
      listEl.classList.add("droppable");
    }
  }

  @autobind
  dropHandler(event: DragEvent) {
    const prjId = event.dataTransfer!.getData("text/plain");
    projectState.moveProject(
      prjId,
      this.type === "active" ? ProjectStatus.Active : ProjectStatus.Finished
    );
  }

  @autobind
  dragLeaveHandler(_: DragEvent) {
    const listEl = this.element.querySelector("ul")!;
    listEl.classList.remove("droppable");
  }

  configure() {
    this.element.addEventListener("dragover", this.dragOverHandler);
    this.element.addEventListener("drop", this.dropHandler);
    this.element.addEventListener("dragleave", this.dragLeaveHandler);
    // メソッドを呼び出し
    projectState.addListener((projects: Project[]) => {
      // フィルターで絞り込み
      const relevantProjects = projects.filter((prj) => {
        if (this.type === "active") {
          return prj.status === ProjectStatus.Active;
        }
        return prj.status === ProjectStatus.Finished;
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  // タグにidを付与する処理
  renderContent() {
    // idの文字列を格納
    const listId = `${this.type}-projects-list`;
    // ulタグを取得
    this.element.querySelector("ul")!.id = listId;
    // h2タグを取得して[active]時は実行中プロジェクト[finished]時は完了プロジェクトを設定
    this.element.querySelector("h2")!.textContent =
      this.type === "active" ? "実行中プロジェクト" : "完了プロジェクト";
  }

  // プロジェクトを表示する処理
  private renderProjects() {
    // リストの要素を取得
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    )! as HTMLUListElement; // [ul]タグを取得
    // リストをクリアする
    listEl.innerHTML = "";
    for (const prjItem of this.assignedProjects) {
      new ProjectItem(listEl.id, prjItem);
      // // リストの項目を作成
      // const listItem = document.createElement("li");
      // // タイトルを設定
      // listItem.textContent = prjItem.title;
      // listEl.appendChild(listItem);
    }
  }
}

// ProjectInput class(フォームの表示と入力値の取得)
class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
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

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
    };
    const descriptionValidatable: Validatable = {
      value: enteredDescription,
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
      //   enteredDescription.trim().length === 0 ||
      //   enteredManday.trim().length === 0
      // 上記の改善Ver
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(mandayValidatable)
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

  @autobind
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

// インスタンス作成
const prjInput = new ProjectInput();
const activePrjList = new ProjectList("active");
const finishedPrjList = new ProjectList("finished");

// ("-------------------------------------------------------");
