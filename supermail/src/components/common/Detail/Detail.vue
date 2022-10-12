<template>
  <div class="DetailAll" ref="alls">
    <DetailChild @changeTitleColor="changeTitleColor" ref="navbar" />
    <DetailChildSwiper :topImages="topImages"></DetailChildSwiper>
    <DetailInfo :goods="goods"></DetailInfo>
    <DetailShopinfo :Shop="Shop"></DetailShopinfo>
    <DetailImages :detailInfo="detailInfo" @imgLoad="imgLoad"></DetailImages>
    <backtop v-if="currentstatus" @click.native="backTop"></backtop>
    <DetailitemParams ref="params" :itemParams="itemParams"></DetailitemParams>
    <!-- 商品参数⬆  -->
    <DetailRate ref="rates" :rate="rate"></DetailRate>
    <!-- 用户评价⬆ -->
    <goodsList ref="recommend" :goods="recommends"></goodsList>
    <DetailBottomBar @addToCart="addToCart"></DetailBottomBar>
    <!-- 商品推荐⬆ -->
  </div>
</template>

<script>
import DetailChild from "./DetailChild/DetailChild.vue";
import DetailChildSwiper from "./DetailChild/DetailChildSwiper.vue";
import DetailInfo from "./DetailChild/DetailInfo.vue";
import DetailShopinfo from "./DetailChild/DetailShopinfo.vue";
import DetailImages from "./DetailChild/DetailImages.vue";
import backtop from "../../content/backTop/backtop.vue";
import DetailitemParams from "../Detail/DetailChild/DetailitemParams.vue";
import DetailRate from "../Detail/DetailChild/DetailRate.vue";
import goodsList from "../../content/goods/goodsList.vue";
import DetailBottomBar from "../Detail/DetailChild/DetailBottomBar.vue";

import {
  requestDetailData,
  Goods,
  Shop,
  getrecommend,
} from "../../../network/requestDetailData";

export default {
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      Shop: {},
      detailInfo: {},
      currentstatus: false,
      itemParams: {},
      rate: {},
      recommends: [],
      topYs: [],
      currentIndex: 0,
    };
  },
  components: {
    DetailChild,
    DetailChildSwiper,
    DetailInfo,
    DetailShopinfo,
    DetailImages,
    backtop,
    DetailitemParams,
    DetailRate,
    goodsList,
    DetailBottomBar,
  },

  activated() {
    this.iid = this.$route.params.iid;
    requestDetailData(this.iid).then((res) => {
      const data = res.data.result;
      // console.log(data);

      this.topImages = res.data.result.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      this.Shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.itemParams = data.itemParams;

      //请求数据时判断评论是否个数为零，为零就不接收数据
      if (data.rate.cRate !== 0) {
        this.rate = data.rate.list[0];
      }
    });

    getrecommend().then((res) => {
      // console.log(res);
      this.recommends = res.data.data.list;
    });
  },

  mounted() {
    //给首页的scroll绑定防抖
    this.$refs.alls.addEventListener(
      "scroll",
      this.debounce(this.scrollToTop, 200)
    );
  },
  beforeDestroy() {
    this.$refs.alls.removeEventListener("scroll", this.debounce);
  },

  methods: {
    debounce(fn, delay) {
      let timeout = null;
      let count = 0;
      return function () {
        if (timeout != null) clearTimeout(timeout);
        if (count == 0) {
          fn.apply(this);
          count++;
        } else {
          timeout = setTimeout(fn, delay);
          count++;
        }
      };
    },

    scrollToTop() {
      this.saveY = this.$refs.alls.scrollTop;
      if (this.$refs.alls.scrollTop > 100) {
        this.currentstatus = true;
      } else {
        this.currentstatus = false;
      }

      let length = this.topYs.length;
      for (let i = 0; i < length; i++) {
        if (
          this.currentIndex !== i &&
          ((i >= 0 &&
            i < length - 3 &&
            this.$refs.alls.scrollTop >= this.topYs[0] &&
            this.$refs.alls.scrollTop <
              this.topYs[i + 2] - this.$refs.params.$el.offsetHeight - 40) ||
            (i < length - 2 &&
              i >= 1 &&
              this.$refs.alls.scrollTop >=
                this.topYs[i + 1] - this.$refs.params.$el.offsetHeight - 40 &&
              this.$refs.alls.scrollTop < this.topYs[i + 1] - 40) ||
            (i < length - 1 &&
              i >= length - 2 &&
              this.$refs.alls.scrollTop >= this.topYs[i] - 40 &&
              this.$refs.alls.scrollTop < this.topYs[i + 1] - 40) ||
            (i === length - 1 &&
              this.$refs.alls.scrollTop >= this.topYs[i] - 40))
        ) {
          this.currentIndex = i;
          this.$refs.navbar.currentIndex = this.currentIndex;
        }
      }
    },

    backTop() {
      let timer = setInterval(() => {
        let ispeed = Math.floor(-this.$refs.alls.scrollTop / 5);
        this.$refs.alls.scrollTop = this.$refs.alls.scrollTop + ispeed;
        if (this.$refs.alls.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },

    changeTitleColor(index) {
      if (index == 1) {
        const y =
          this.topYs[index + 1] - this.$refs.params.$el.offsetHeight - 40;
        this.$refs.alls.scrollTo(0, y);
      } else {
        const y = this.topYs[index] - 39;
        this.$refs.alls.scrollTo(0, y);
      }
    },

    imgLoad(index) {
      this.topYs = [];
      this.topYs.push(0);
      this.topYs.push(this.$refs.params.$el.offsetHeight);
      this.topYs.push(this.$refs.rates.$el.offsetTop);
      this.topYs.push(this.$refs.recommend.$el.offsetTop);
      // console.log(this.topYs);
    },

    addToCart() {
      // 创建一个商品对象，同时把商品中该有的属性通过赋值形式添加⬇
      const productions = {};
      productions.title = this.goods.title;
      productions.desc = this.goods.desc;
      productions.price = this.goods.realPrice;
      productions.image = this.topImages[0];
      productions.iid = this.iid;

      // console.log(this.productions);
      // 通过Vuex来把参数传到Vuex中来处理(这里确定用Vuex来处理的理由是详情页和购物车页都需要共同的状态，即添加进购物车的
      //                                购物车的商品信息，而这正是Vuex的设计理念)
      this.$store.dispatch("addToCartList", productions).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style >
.DetailAll {
  background-color: white;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  position: relative;
  z-index: 5;
}

.iconfontss {
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  position: fixed;
  bottom: 78px;
  right: 8px;
  background: rgba(100, 100, 100, 0.6);
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  z-index: 4;
  text-align: center;
  line-height: 60px;
}
</style>