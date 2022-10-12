<template>
  <div class="all">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="down">
      <router-link to="/ShouYe">
        <DownContent path="/ShouYe">
          <span class="iconfont">&#xe63f;</span>
          <span>首页</span>
        </DownContent>
      </router-link>
      <router-link to="/FenLei">
        <DownContent path="/FenLei">
          <span class="iconfontfirst">&#xe644;</span>
          <span>分类</span>
        </DownContent>
      </router-link>
      <router-link to="/GouWuChe" path="/GouWuChe">
        <DownContent path="/GouWuChe">
          <span class="iconfontsecond">&#xe602;</span>
          <span>购物车</span>
        </DownContent>
      </router-link>
      <router-link to="/WoDe" path="/WoDe">
        <DownContent path="/WoDe">
          <span class="iconfontthird">&#xe634;</span>
          <span>我的</span>
        </DownContent>
      </router-link>
    </div>
  </div>
</template>

<script>
import ShouYe from "../content/ShouYe.vue";
import FenLei from "../content/FenLei.vue";
import GouWuChe from "../content/GouWuChe.vue";
import WoDe from "../content/WoDe.vue";
import DownContent from "./DownContent.vue";

export default {
  components: {
    ShouYe,
    FenLei,
    GouWuChe,
    WoDe,
    DownContent,
  },
  methods: {
    // hao() {
    //   this.$router.push({
    //     path: "/ShouYe",
    //   });
    // },
  },
};
</script>

<style>
.all {
  width: 100vw;
  height: 100vh;
}

.down {
  position: absolute;
  display: flex;
  width: 100vw;
  height: 10vh;
  background-color: #ededed;
  bottom: 0;
  justify-content: space-around;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}

.down > a {
  text-decoration: none;
  display: block;
  height: 10vh;
  width: 70px;
  background-color: antiquewhite;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.hao {
  height: 10vh;
  width: 70px;
  background-color: antiquewhite;
}

.content {
  width: 70px;
  height: 10vh;
  background-color: #ededed;
}

.content:hover span {
  color: #ff69b4;
}

span {
  display: block;

  line-height: 44px;
  text-align: center;
}

span:nth-child(1) {
  height: 7vh;
  line-height: 65px;
}

span:nth-child(2) {
  height: 3vh;
  font-size: 14px;
  line-height: 10px;
  color: black;
}
</style>