// namespace App {
// Component Class(abstractクラス：親クラス)
// [export default]名前付きエクスポート
export default abstract class Component<
  T extends HTMLElement,
  U extends HTMLElement
> {
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
// }
