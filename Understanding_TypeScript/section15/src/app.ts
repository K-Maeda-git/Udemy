/*  
ウォッチモード:tsc -w
nodemon(コードの変更監視を行いサーバーを再起動する):npm start <-package.jsonに"start"を追加している
*/

import express, { NextFunction, Response, Request } from "express";

import { json } from "body-parser";

import todoRoutes from "./routes/todos";

const app = express();

app.use(json());

// expressサーバーに接続
app.use("/todos", todoRoutes);

// エラー処理を行うミドルウェア関数
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

// サーバーを起動し、特定のポート番号でリクエストの待受を開始する
app.listen(3000); // ポート番号の指定
