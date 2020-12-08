import "./reactApp.jsx";
import my from "./my.js";
import "../stylesheets/main.scss"; // cssの読み込み

import Vue from "vue";
import vueApp from "./vueApp.vue";

import add from "./add.ts";

new Vue({
  el: "#vue-root",
  render: (h) => h(vueApp),
});

console.log(add(3, 9));
console.log("demo-webpack");
// 自作モジュールの呼び出し
my();
