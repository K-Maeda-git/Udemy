# [section5]「国別時系列 COVID 19 API」 コロナウイルス DashBoard アプリ

## 成果物   
- Firebaseの公開リンク    
  https://covid-dashboard-api-dd4fc.web.app/

## 開発環境の準備

- プロジェクトの作成  
  `npx create-react-app . --template redux-typescript`
- ローカルサーバーの起動  
  `npm start`

### 各種ツールのインストール

- [ライブラリ]axios  
  `npm install axios`
- [ライブラリ]material-ui  
  `npm install @material-ui/core`
- [ライブラリ]chart.js --save  
  `npm install chart.js --save`
- [ライブラリ]react-chart.js-2  
  `npm install react-chartjs-2`
- [ライブラリ]react-countup  
  `npm install react-countup`
- [ライブラリ]react-icons  
  `npm install react-icons`

### Firebase でデプロイ

[firebase コンソール](https://console.firebase.google.com/project/covid-dashboard-api-dd4fc/overview)  開発＞ Hosting ＞始める

- プロジェクトをビルドする
  ビルドするとプロジェクト直下に「build」フォルダが作られる  
  `npm run build`

- Firebase CLI(コマンドラインツール)のインストール  
  `npm install -g firebase-tools`

- プロジェクトの初期化    
  - ログイン    
  `firebase login`   
  - 開始    
  下記コマンドを実行    
  `firebase init`  
  [y]を選択   
  `? Are you ready to proceed? Yes`  
  [Hosting: Configure and deploy Firebase Hosting sites]を矢印キーとspaceキーで選択して、Enterキーで決定する    
  `? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choices. Hosting: Configure and deploy Firebase Hosting sites`
  [use an existing project]を選択する   
  `? Please select an option: Use an existing project`    
  firebaseで作成したプロジェクトを選択する    
  `? Select a default Firebase project for this directory: covid-dashboard-api-dd4fc (covid-dashboard-api)`   
  [build]と入力してフォルダを指定   
  `? What do you want to use as your public directory? build`   
  [y]を選択   
  `? Configure as a single-page app (rewrite all urls to /index.html)? Yes`   
  [N]を選択   
  `? File build/index.html already exists. Overwrite? No`   
  完了    
  `+  Firebase initialization complete!`    
  - デプロイ    
  `firebase deploy`
  

---

# README

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
