interface Foo {
  value: string;
}
const foo: Foo = {
  value: "foo",
};
console.log(foo);

interface Xxx {
  a: string;
  b: number;
  c: string[];
}

function echo(x: Xxx) {
  console.log(x.a);
  console.log(x.b);
  console.log(x.c);
}

// OK
const obj1 = { a: "aaa", b: 11, c: ["a", "b"] };
echo(obj1);

// OK
// 順序は関係ない
const obj2 = { c: ["a", "b"], a: "aaa", b: 11 };
echo(obj2);

// OK
// 余計なプロパティが存在していても良い
const obj3 = { a: "aaa", b: 11, c: ["a", "b"], d: "hhh" };
echo(obj3);
