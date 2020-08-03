// 依存関係の追加
// /// <reference path="base-component.ts" />
// /// <reference path="../decorators/autobind.ts" />
// /// <reference path="../models/project.ts" />
// /// <reference path="../models/drag-drop.ts" />

// [import/export]ESモジュール
import { Draggable } from "../models/drag-drop";
import Component from "./base-component";
import { Project } from "../models/project";
import { autobind } from "../decorators/autobind";

// namespace App {
// ProjectItem Class(各プロジェクトをリストの項目として表示する)
export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement>
  implements Draggable {
  // [DDinterfases.Draggable]namespaceを伝える
  // implements DDinterfases.Draggable {
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
// }
