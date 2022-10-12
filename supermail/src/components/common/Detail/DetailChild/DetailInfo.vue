<template>
  <div v-if="Object.keys(goods).length != 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="r-price">￥{{ goods.realPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <span class="iconfontssss"
          >&#xe67c;{{ goods.services[index - 1].name }}</span
        >
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.base-info {
  width: 100vw;
  background-color: white;
  padding-top: 10px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
}
.info-title {
  font-size: 20px;
  color: black;
}

.info-price {
  width: 100vw;
  height: 35px;
}

.info-price span {
  display: block;
  float: left;
  height: 35px;
  margin-bottom: 0px;
}

.r-price {
  font-size: 23px;
  color: #ff69b4;
  line-height: 47px;
  text-align: left;
}

.o-price {
  font-size: 14px;
  margin-left: 2px;
  line-height: 55px;
  color: gray;
  text-decoration: line-through;
}
.info-price .discount {
  height: 20px;
  margin-left: 2px;
  line-height: 20px;
  width: auto;
  padding: 0px 5px;
  text-align: center;
  border: 1px solid #ff69b4;
  border-radius: 35px;
  background-color: #ff69b4;
  color: white;
  margin-top: 7px;
}

.info-other {
  height: 40px;
  margin-top: 20px;

  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}

.info-other span {
  width: 132px;
  display: block;
  float: left;
  height: 40px;
  line-height: 48px;
  font-size: 16px;
  color: gray;
}

.info-other :nth-child(1) {
  text-align: left;
}

.info-other :nth-child(3) {
  text-align: right;
}

.info-service {
  display: flex;

  height: 80px;
}

.info-service .info-service-item {
  display: block;
  flex: 1;
}

.iconfontssss {
  color: grey;
  height: 80px;
  text-align: center;
  line-height: 80px;
  font-size: 13px;
}
</style>