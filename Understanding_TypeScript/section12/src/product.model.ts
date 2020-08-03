// ライブラリのインポート
import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class Product {
  @IsNotEmpty() // ルール：必須
  title: string;
  @IsNumber() // ルール：number型であること
  @IsPositive() // ルール：正の値であること
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }

  getInfomation() {
    return [this.title, `${this.price}円`];
  }
}
