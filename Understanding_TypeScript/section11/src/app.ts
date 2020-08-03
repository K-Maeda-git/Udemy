// トリプルスラッシュ・ディレクティブ（タイプスクリプトへの特別な指示を行う機能）
// 依存関係を示している
// /// <reference path="components/project-input.ts" />
// /// <reference path="components/project-list.ts" />

import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";

// namespaceで囲うことで同名のものを扱えるようにしている
// namespace App {
  // インスタンス作成
  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
// }
