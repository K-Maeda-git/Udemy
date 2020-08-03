// namespace App {
  // autobind decorator
  export function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
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
// }
