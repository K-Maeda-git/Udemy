var foo = {
    value: "foo"
};
console.log(foo);
function echo(x) {
    console.log(x.a);
    console.log(x.b);
    console.log(x.c);
}
// OK
var obj1 = { a: "aaa", b: 11, c: ["a", "b"] };
echo(obj1);
// OK
// 順序は関係ない
var obj2 = { c: ["a", "b"], a: "aaa", b: 11 };
echo(obj2);
// OK
// 余計なプロパティが存在していても良い
var obj3 = { a: "aaa", b: 11, c: ["a", "b"], d: "hhh" };
echo(obj3);
