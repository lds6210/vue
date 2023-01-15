import Vue from "vue";
import VueRouter from "vue-router";
import NumberBaseball from "../3_숫자야구/NumberBaseball";
import ResponseCheck from "../4_반응속도체크/ResponseCheck";
import GameMatcher from "./GameMatcher";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/number-baseball", component: NumberBaseball },
    { path: "/response-check", component: ResponseCheck },
    { path: "/game/:name", component: GameMatcher }, // /game
  ],
});
