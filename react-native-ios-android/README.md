# [React Native で iOS / Android アプリ開発をゼロから始めよう！](https://www.udemy.com/course/react-native-ios-android/)

## 進捗状況

2020/12/05 -> 進行：section04/次回：section05
2020/12/07 -> 進行：section08/次回：section09
2020/12/08 -> 進行：section08/次回：section09

## 学習前の準備

- iOS シミュレーター・android エミュレーターを立ち上げる
  - iOS シミュレーター  
     以下手順でシミュレーターを立ち上げる
    ```
    Xcode>Open Developer Tool>Simulator
    ```
  - android エミュレーター  
     下記画像でエミュレーター起動後下記コマンドを実施してエミュレーターがネットワークに接続できるようにする  
    ※コマンド実施する際は androidstudio で作成したプロジェクトのディレクトリで行う  
    <img src="./section08/image/androidエミュレーターの起動.png">
    ```
    emulator -list-avds
    emulator -avd Pixel_3a_API_30_x86 -dns-server 8.8.8.8
    ```
- Expo を使う
  ```
  npm start // オンライン状態でプロジェクトスタート
  npm start --ofline // オフライン状態でプロジェクトスタート
  npm run ios // プロジェクトを立ち上げる際にiosシミュレーターでも開く
  npm run android // プロジェクトを立ち上げる際にandroidエミュレーターでも開く
  ```
