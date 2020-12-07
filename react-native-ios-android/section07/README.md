# セクション 7:ReactNative の開発環境を整える

## Node.js のインストール

インストール済みのため省略

## Expo のインストール

- Expo CLI  
  `npm install -g expo-cli`
- iOS および Android 用の Expo クライアントアプリ

  - [シミュレーター]iOS  
    [Xcode](https://apps.apple.com/app/xcode/id497799835)のインストール
  - [エミュレーター]Android  
    [android studio](https://developer.android.com/studio?hl=ja)のインストール

    - 環境変数の設定（※初回のみ）

      1. Android SDK Location のパスを控える  
         android studio>Configure>Preference>SystemSettings>Android SDK
      2. ターミナルで以下を実施  
         `vim ~/.zshrc`  
         a キーを押して「INSERT」モードへ移行  
         下記を挿入

         ```
         export ANDROID_SDK=/Users/kaito/Library/Android/sdk
         (こちらでも可能→export ANDROID_SDK=${HOME}/Library/Android/sdk)
         export PATH=${PATH}:${ANDROID_SDK}/emulator
         export PATH=${PATH}:${ANDROID_SDK}/platform-tools
         ```

         esc キーで INSERT モードを終了して「:wq」で終了する  
          ターミナルを一度終了する

      3. 設定の確認  
         ターミナルを再度開いて以下コマンドをそれぞれ実施する  
         `echo $ANDROID_SDK`
         `echo $PATH`
         2 で設定したパスが返ってくることを確認する

      `emurator`と入力して  
       `emulator: ERROR:〜named 'foo'`と出力されることを確認する  
       `adb`と入力して各種情報が出力されることを確認する    
    - androidエミュレーターを使用するための準備   
      android studioでプロジェクトを新規に作成する    
      ※エミュレーターを利用するためのプロジェクトなので作成するだけで良い   
    - androidエミュレーターを起動する   
      <img src="./image/androidエミュレーターの起動.png">



      
      <img src="./image/androidエミュレーターの起動.png" width=30%>


