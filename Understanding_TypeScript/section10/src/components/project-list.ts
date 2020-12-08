// 依存関係の追加
// /// <reference path="base-component.ts" />
// /// <reference path="../decorators/autobind.ts" />
// /// <reference path="../state/project-state.ts" />
// /// <reference path="../models/project.ts" />
// /// <reference path="../models/drag-drop.ts" />

import Component from "./base-component.js";
import { DragTarget } from "../models/drag-drop.js";
import { Project, ProjectStatus } from "../models/project.js";
import { autobind } from "../decorators/autobind.js";
import { projectState } from "../state/project-state.js";
import { ProjectItem } from "./project-item.js";

// namespace App {
// ProjectList Class(プロジェクトのリストを表示)
export class ProjectList extends Component<HTMLDivElement, HTMLElement>
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
// }
