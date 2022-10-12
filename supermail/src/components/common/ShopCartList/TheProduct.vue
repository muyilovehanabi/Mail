<template>
  <div class="listProduct">
    <div class="product">
      <div class="anniu">
        <input type="checkbox" :checked="zhuangtai" @click="boolean" />
      </div>
      <div class="tupian">
        <img :src="product.image" alt="" />
      </div>
      <div class="miaoshu">
        <div class="title">{{ product.title }}</div>
        <div class="desc">{{ product.desc }}</div>
        <div class="juti">
          <span class="price">￥{{ product.price }}</span>
          <span class="count">x{{ product.count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    boolean() {
      this.product.checked = !this.product.checked;
    },
  },
  computed: {
    zhuangtai() {
      return this.product.checked;
    },
  },
};
</script>

<style scoped>
.listProduct {
  height: 140px;
  background-color: white;
  border-bottom: 2px solid rgba(100, 100, 100, 0.3);
}

.product {
  height: 140px;

  display: flex;
}

.anniu {
  width: 10%;
  height: 140px;
  background-color: white;
}

.anniu input {
  width: 20px;
  height: 20px;
  margin: 60px 10px 60px 10px;
  visibility: hidden;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

input[type="checkbox"] {
  cursor: pointer;
  position: relative;
  width: 20px;
  height: 20px;
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
}

input[type="checkbox"]::after {
  position: absolute;
  top: 0;
  color: #000;
  width: 20px;
  height: 20px;
  display: inline-block;
  visibility: visible;
  padding-left: 0px;
  text-align: center;
  content: " ";
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
}

input[type="checkbox"]:checked::after {
  content: "✓";
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  background-color: #ff69b4;
}

.tupian {
  flex: 1;
  /* background-color: yellow; */
  height: 120px;
  margin-top: 10px;
}

.tupian img {
  height: 120px;
  width: 100%;
  border-radius: 5px;
}

.miaoshu {
  width: 277.64px;
  background-color: white;
  height: 140px;
  display: flex;
  flex-flow: column;
  padding-left: 10px;
}

.miaoshu .title {
  height: 40px;
  width: 267.64px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  line-height: 30px;
  font-size: 18px;
}

.miaoshu .desc {
  height: 40px;
  width: 267.64px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 15px;
  color: #bab6b7;
  line-height: 30px;
  text-align: center;
}

.miaoshu .juti {
  flex: 1;
}

.juti .price {
  display: block;
  width: 50%;
  height: 100%;
  float: left;
  font-size: 20px;
  color: orange;
}

.juti .count {
  display: block;
  width: 50%;
  height: 100%;
  float: right;
  font-size: 20px;
  color: grey;
  line-height: 64px;
}
</style>