<template>
  <div class="ListItem" @click="itemsClick">
    <img :src="getshowRes" alt="" />
    <div class="title">{{ goods.title }}</div>
    <span class="price">￥{{ goods.price }}</span>
    <span class="iconfonts">&#xe67e;</span>
    <span class="collect">{{ goods.cfav }}</span>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    itemsClick() {
      this.$router.push("/Detail/" + this.goods.iid);
    },
  },
  computed: {
    getshowRes() {
      return this.goods.image || this.goods.show.img;
    },
  },
};
</script>

<style scoped>
.ListItem {
  width: 48%;
  margin-top: 10px;
  margin-left: -9px;
}

.ListItem img {
  margin-left: 6px;
  width: 185px;
  height: 270px;
  border-radius: 6px;
}

.ListItem .title {
  top: 270px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
  margin-left: 6px;
}

.ListItem .price {
  display: inline-block;
  text-align: center;
  width: 50%;
  height: 15px;
  line-height: 15px;
  color: #ff69b4;
  font-size: 16px;
}

.ListItem .collect {
  display: inline-block;
  text-align: left;
  width: 35%;
  height: 15px;
  line-height: 15px;
  font-size: 16px;
}

.ListItem .iconfonts {
  display: inline-block;
  text-align: right;
  width: 15%;
  height: 15px;
  line-height: 15px;
}
</style>