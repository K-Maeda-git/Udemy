// namespace App {
// Project State Management

import { Project, ProjectStatus } from "../models/project.js";

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
export class ProjectState extends State<Project> {
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
// モジュールのコードが実行されるのは最初に呼び出されたときだけ
console.log('実行中...')
export const projectState = ProjectState.getInstance();
// }
