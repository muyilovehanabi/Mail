<template>
  <div class="BottomBar">
    <div class="one">
      <div class="iconfontT">&#xe650;</div>
      <div class="xxx">客服</div>
    </div>
    <div class="two">
      <div class="iconfontT">&#x100d9;</div>
      <div class="xxx">店铺</div>
    </div>
    <div class="three">
      <div class="iconfontT">&#xe646;</div>
      <div class="xxx">收藏</div>
    </div>
    <div class="four" @click="addToCart">加入购物车</div>
    <!-- 在DetailBottomBar中给底部导航加入购物车天价点击事件⬆ -->
    <div class="five">购物</div>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart() {
      this.$emit("addToCart");
      // 通过事件总线把事件传到Detail组件中⬆
    },
  },
};
</script>

<style>
.BottomBar {
  height: 69px;
  position: sticky;
  bottom: 0px;
  background: white;
  border-top: 1px solid rgba(100, 100, 100, 0.6);
  margin-top: 5px;
}
.BottomBar div {
  float: left;
  height: 69px;
  text-align: center;
  line-height: 69px;
}
.one {
  width: 16%;
}

.two {
  width: 16%;
}

.three {
  width: 16%;
}

.BottomBar .one .iconfontT {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 60px;
  font-size: 35px;
  color: #ff789a;
}

.BottomBar .two .iconfontT {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 60px;
  font-size: 33px;
}

.BottomBar .three .iconfontT {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 60px;
  font-size: 38px;
}

.BottomBar .one .xxx {
  width: 100%;
  height: 19px;
  text-align: center;
  color: grey;
  line-height: 19px;
}

.BottomBar .two .xxx {
  width: 100%;
  height: 19px;
  text-align: center;
  color: grey;
  line-height: 19px;
}

.BottomBar .three .xxx {
  width: 100%;
  height: 19px;
  text-align: center;
  color: grey;
  line-height: 19px;
}

.four {
  width: 26%;
  font-size: 16px;
  color: black;
  background-color: #ffdd10;
}

.five {
  width: 26%;
  font-size: 16px;
  color: white;
  background-color: #ff789a;
}
</style>