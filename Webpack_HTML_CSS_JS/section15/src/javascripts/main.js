import "./reactApp.jsx";
import my from "./my.js";
import "../stylesheets/main.scss"; // cssの読み込み

import Vue from "vue";
import vueApp from "./vueApp.vue";

new Vue({
  el: "#vue-root",
  render: (h) => h(vueApp),
});

console.log("demo-webpack");
// 自作モジュールの呼び出し
my();
