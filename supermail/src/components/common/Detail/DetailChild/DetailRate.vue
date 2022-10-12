<template>
  <div v-if="Object.keys(rate).length !== 0" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right">></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="rate.user.avatar" alt="" />
      <span>{{ rate.user.uname }}</span>
    </div>
    <div class="info-detail">
      <p>{{ rate.content }}</p>
      <div class="info-other">
        <span class="date">{{ rate.created | showDate }}</span>
        <span class="style">{{ rate.style }}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" v-for="(item, index) in rate.images" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  props: {
    rate: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  filters: {
    showDate(value) {
      const date = new Date(value * 1000);
      return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
    },
  },
};
</script>

<style scoped>
.arrow-right {
  font-size: 19px;
  color: #ec6c7d;
}

.comment-info {
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}

.info-header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.header-title {
  float: left;
  font-size: 15px;
}

.header-more {
  float: right;
  margin-right: 10px;
  font-size: 13px;
}

.info-user {
  position: relative;
  padding: 10px 0 5px;
}

.info-user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}

.info-user span {
  position: absolute;
  font-size: 16px;
  top: 25px;
  margin-left: 47px;
}

.info-detail {
  padding: 0 5px 15px;
}

.info-detail p {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}

.info-detail .info-other {
  position: relative;
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}

.date {
  position: absolute;
  left: 0px;
  height: 30px;
  width: 35%;
  line-height: 30px;
  text-align: left;
}

.style {
  position: absolute;
  right: 0px;
  width: 65%;
  height: 30px;
  line-height: 30px;
  text-align: left;
  font-size: 12px;
  color: #999;
}

.info-imgs {
  margin-top: 42px;
}

.info-imgs img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>