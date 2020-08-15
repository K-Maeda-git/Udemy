import { Router } from "express";

import { createTodo,getTodos,updateTodo,deleteTodo } from "../controllers/todos";

const router = Router();

// 「ルーティング設定」
// 新しいtodoを作成する
router.post("/", createTodo);
// すべてのtodoを取得する
router.get("/",getTodos);
// 既存のtodoを更新する
router.patch("/:id",updateTodo);
// 特定のtodoを削除する
router.delete("/:id",deleteTodo);

export default router;
