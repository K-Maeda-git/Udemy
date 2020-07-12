// [型の利用：object,Array]--------------------------------------------------------
var person: {
  name: string;
  age: number;
  hobbies: string[];
  // Tuple型を利用するときに型を明示しておくことで厳密な配列を作成することができる
  role: [number, string];
} = {
  name: "yota",
  age: 20,
  // Arrayの利用
  hobbies: ["Sports", "Cooking"],
  role: [2, "AUTHOR"],
};

// 明示されている型と一致しているのでOK
person.role = [0, "admin"];
// 明示されている型と一致していないのでNG
// person.role = [0,'admin','user'];
// person.role = ['user',1];

console.log(person.name);
console.log("------------------------------------------");

// 変数としてArray型を使う
let favoriteActivities: string[];
favoriteActivities = ["Sports"];
for (const hobby of person.hobbies) {
  console.log(hobby);
  console.log(hobby.toUpperCase());
}
console.log("------------------------------------------");

const product = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

console.log(product);
console.log("------------------------------------------");

// [型の利用：Enum]--------------------------------------------------------
// カスタム型の定義
enum Role {
  // 以下の定数には自動で数値が付与される
  ADMIN, // 0が付与
  READ_ONLY, // 1が付与
  AUTHOR, // 2が付与
  // 以下のように任意に指定することも可能
  // ADMIN = 5, // 5が付与
  // READ_ONLY , // オートインクリメントにより6が付与
  // AUTHOR = 'AUTHOR', // 文字列'AUTHOR'が付与
}
console.log(Role[0]);
console.log(Role[1]);
console.log(Role[2]);

const person2 = {
  role: Role[0],
};
if (person2.role === Role[0]) {
  console.log("管理者ユーザー");
} else {
  console.log("管理者ユーザーではありません");
}
console.log("------------------------------------------");
