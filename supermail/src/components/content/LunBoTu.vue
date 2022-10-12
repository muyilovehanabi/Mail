<template>
  <div class="upall">
    <div class="block">
      <el-carousel trigger="click" height="250px">
        <el-carousel-item v-for="(item, index) in images" :key="index">
          <a :href="item.link">
            <img style="width: 100vw; height: 250px" :src="item.image" alt="" />
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="commendsSection">
      <div
        class="commendsContent"
        v-for="(item, index) in commends"
        :key="index"
      >
        <li>
          <a
            style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)"
            :href="item.link"
          >
            <img style="width: 80px; height: 80px" :src="item.image" alt="" />
          </a>
        </li>
        <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from "../../network/request";
import { requestdata } from "../../network/requestdata";

export default {
  data() {
    return {
      images: [],
      commends: [],
    };
  },
  mounted() {
    request({
      url: "/home/multidata",
    })
      .then((res) => {
        this.images = res.data.data.banner.list;
        this.commends = res.data.data.recommend.list;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style  scoped>
.upall {
  height: 410px;
  background-color: white;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}

.commendsSection {
  height: 130px;
  margin-top: 20px;
  display: flex;
}

.commendsContent {
  justify-content: space-around;
  width: 110px;
  height: 110px;

  margin-left: -1.2px;
  text-align: center;
}

.commendsContent li {
  list-style: none;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-left: 11px;
  background-color: red;
}

.commendsContent span {
  display: block;
  height: 30px;
  line-height: 40px;
  font-size: 15px;
  color: grey;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>