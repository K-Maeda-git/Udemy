// [namespace構文]オブジェクトのプロパティの値として保持される
// namespace DDinterfases {
// namespace App {
  // Drag&Drop(ドラッグ＆ドロップ機能の実装)
  // ドラッグできるコンポーネントのクラスに実装するインターフェイス
  export interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
  }
  // ドロップできる場所
  export interface DragTarget {
    // ドロップする場所が有効かをブラウザに伝えるためのイベントハンドラー
    dragOverHandler(event: DragEvent): void;
    // ドロップするときのイベントハンドラー（データや画面を更新する）
    dropHandler(event: DragEvent): void;
    // ビジュアル上のフィードバッグを行うためのイベントハンドラー
    dragLeaveHandler(event: DragEvent): void;
  }
// }
