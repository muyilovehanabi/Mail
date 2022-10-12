<template>
  <div ref="all">
    <NavBar id="nav">
      <span slot="center" class="shopping">购物街</span>
    </NavBar>
    <LunBoTu></LunBoTu>
    <ShouYeXiaFang></ShouYeXiaFang>
    <tabControl
      class="tabtab"
      :titles="['流行', '新款', '精选']"
      @shift="shift"
    ></tabControl>
    <goodsList :goods="goods[currentType].datalist" />
    <backtop v-if="currentstatus" @click.native="backTop" />
  </div>
</template>

<script>
import NavBar from "../common/NavBar.vue";
import LunBoTu from "./LunBoTu.vue";
import ShouYeXiaFang from "../content/ShouYeXiaFang.vue";
import tabControl from "../common/tabControl.vue";
import { requestdata } from "../../network/requestdata";
import goodsList from "../content/goods/goodsList.vue";
import backtop from "../content/backTop/backtop.vue";

export default {
  data() {
    return {
      goods: {
        pop: { page: 0, datalist: [] },
        new: { page: 0, datalist: [] },
        sell: { page: 0, datalist: [] },
      },
      currentType: "pop",
      currentstatus: false,
      height: "",
      saveY: "",
      saveYY: "",
    };
  },
  components: {
    NavBar,
    LunBoTu,
    ShouYeXiaFang,
    tabControl,
    goodsList,
    backtop,
    images: [],
  },

  activated() {
    this.keepLocation(this.saveYY);
  },

  deactivated() {
    this.saveYY = this.saveY;
  },

  created() {
    this.getrequestdata("pop");
    this.getrequestdata("new");
    this.getrequestdata("sell");
  },

  mounted() {
    //给首页的scroll绑定防抖
    this.$refs.all.addEventListener(
      "scroll",
      this.debounce(this.scrollToTop, 200)
    );

    //获取数据调取的div盒子的高度
    this.$bus.$on("submitHeight", (Height) => {
      this.height = Height;
    });
  },
  beforeDestroy() {
    this.$refs.all.removeEventListener("scroll", this.debounce);
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

    //控制回到顶部的出现与发起新的数据请求
    scrollToTop() {
      this.saveY = this.$refs.all.scrollTop;
      if (this.$refs.all.scrollTop > 300) {
        this.currentstatus = true;
      } else {
        this.currentstatus = false;
      }

      if (this.height != 0) {
        if (Math.floor(this.$refs.all.scrollTop - 3) >= this.height) {
          this.getrequestdata(this.currentType);
        }
      }
    },

    // 切换商品展示页面

    shift(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    // 回到顶部

    backTop() {
      let timer = setInterval(() => {
        let ispeed = Math.floor(-this.$refs.all.scrollTop / 5);
        this.$refs.all.scrollTop = this.$refs.all.scrollTop + ispeed;
        if (this.$refs.all.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },

    //让页面能够得到缓存 保持住所在位置
    keepLocation(y) {
      let timer = setInterval(() => {
        let ispeed = Math.ceil(y / 5);
        this.$refs.all.scrollTop = this.$refs.all.scrollTop + ispeed;
        if (this.$refs.all.scrollTop >= y) {
          clearInterval(timer);
        }
      }, 0);
    },

    //网页请求
    getrequestdata(type) {
      const page = this.goods[type].page + 1;
      requestdata(type, page)
        .then((res) => {
          this.goods[type].datalist.push(...res.data.data.list);
          this.goods[type].page += 1;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.shouyexia {
  height: auto;
  margin-top: 10px;
  background-color: white;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}

div {
  width: 100vw;
  height: 90vh;
  overflow: scroll;
  background-color: #dcdcdc;
}

#nav {
  background-color: #ff69b4;
}

.shopping {
  display: block;
  height: 44px;
  line-height: 44px;
  text-align: center;
  color: white;
  font-size: 18px;
}

.tabtab {
  position: sticky;
  top: 44px;
  z-index: 3;
}

.iconfontss {
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  position: fixed;
  bottom: 105px;
  right: 25px;
  background: white;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  z-index: 4;
  text-align: center;
  line-height: 60px;
}
</style>