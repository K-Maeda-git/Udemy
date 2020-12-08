// // lodashのインポート
// import _ from "lodash";
// console.log(_.shuffle([1, 2, 3]));

// ライブラリのインポート
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

import { Product } from "./product.model";
const products = [
  { title: "商品1", price: 100 },
  { title: "商品2", price: 200 },
];

// class-validator
const newProd = new Product("", -100);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("バリデーションエラー！");
    console.log(errors);
  } else {
    console.log(newProd.getInfomation());
  }
});

// const p1 = new Product("商品1", 100);

// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

// class-transformer
// loadedProductsをclass-transformerを使って書き換えた
const loadedProducts = plainToClass(Product, products); // productsの配列をループしてクラスのインスタンスに変換

for (const prod of loadedProducts) {
  console.log(prod.getInfomation());
}

// reflect-metadata
// index.htmlで定義した変数を呼んでいる
// [declare]存在していることがわかっているのでTypeScriptに探す必要がないということを伝えている
// declare var GLOBAL: any;
// console.log(GLOBAL);
