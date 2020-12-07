# セクション 8:Expo の使い方/プロジェクトの構成とエディタの設定

## expo プロジェクトの作成

プロジェクトを作成するディレクトリに移動して下記コマンドを実施  
 `expo init`  
 template の選択では空のプロジェクトを作成するので、「blank」を選択する

## expo プロジェクトの動作確認

- iOS シミュレーター・android エミュレーターを立ち上げる
  - iOS シミュレーター  
    Xcode>Open Developer Tool>Simulator
  - android エミュレーター  
    下記画像でエミュレーター起動後下記コマンドを実施してエミュレーターがネットワークに接続できるようにする  
    ※コマンド実施する際のディレクトリは作成したプロジェクトで行う  
    `emulator -list-avds`
    `emulator -avd Pixel_3a_API_30_x86 -dns-server 8.8.8.8`
    <img src="./image/androidエミュレーターの起動.png">
- iOS シミュレーター・android エミュレーターで作成したプロジェクトを表示する

1. コンソールから表示する方法
   下記コマンドを実施  
   `expo start`  
   ブラウザでコンソールが表示されたら、  
   `Run on Android device/emulator`  
   `Run on iOS simulator`  
   をそれぞれ選択して iOS シミュレーター・android エミュレーター上で表示を確認する  
   <img src="./image/expo_start.png">
2. npm コマンドで表示する方法

   - iOS シミュレーター

     ```
     npm run ios
     ```

   - android エミュレーター

     ```
     emulator -list-avds
     emulator -avd Pixel_3a_API_30_x86 -dns-server 8.8.8.8
     npm run android
     ```

- 実機（iOS）でプロジェクトを立ち上げる

  - Expo Client のインストール  
    事前に下記アプリをインストールする  
    [Expo Client](https://apps.apple.com/jp/app/expo-client/id982107779)
  - プロジェクトを立ち上げる  
    下記コマンドでプロジェクトを立ち上げて表示される QR コードを読み取る
    ※コンソール画面のCONNECTIONが「LAN」でありかつPC、スマホが同じネットワーク内にいる必要があるので注意が必要    

    ```
    npm start
    ```

## expo 利用時の注意点    
  ネットワークに接続している状態でないと`npm start`などした際にシミュレーターを動かすことができない。   
  だがコマンドに下記オプションをつけてプロジェクトを立ち上げることでオフライン状態でシミュレーターを動かすことができ、なおかつJavaScriptの実行が高速となる    
  ```
  npm start --ofline
  ```

## expo シミュレーター内でのオプション   
  - iOS   
    ```   
    cmd+D   
    ```       
  - android   
    ```   
    cmd+M   
    ```     

## ライブラリのインストール   
  - ESLint   
    下記コマンドでライブラリをプロジェクトにインストールする    
    ```   
    npm install --save-dev eslint babel-eslint eslint-config-airbnb   
    ```

    ```
    npm install --save-dev eslint-plugin-import eslint-plugin-jsx-ally eslint-plugin-react
    ```





     <img src="./image/androidエミュレーターの起動.png" width=30%>
