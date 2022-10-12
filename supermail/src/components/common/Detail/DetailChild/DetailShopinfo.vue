<template>
  <div class="shopContent">
    <div class="TopShopContent">
      <div class="logo">
        <img :src="Shop.logo" alt="" />
      </div>
      <span>{{ Shop.name }}</span>
    </div>
    <div class="CenterShopContent">
      <div class="Shopleft">
        <table>
          <tr class="Shoplefttop">
            <td>{{ Shop.sells }}</td>

            <td>{{ Shop.goodsCount }}</td>
          </tr>
          <tr>
            <td>总销量</td>
            <td>全部宝贝</td>
          </tr>
        </table>
      </div>
      <div class="Shopright">
        <table>
          <tr v-for="(item, index) in Shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ active: item.isBetter }">
              {{ item.score }}
            </td>
            <td class="scores" :class="{ actives: item.isBetter }">
              {{ item.isBetter ? "高" : "低" }}
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="DownShopContent">
      <div>进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Shop: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.shopContent {
  margin-top: 10px;
  width: 100vw;
  height: 230px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
  background-color: white;
}

.TopShopContent {
  position: relative;
  width: 100vw;
  height: 70px;
}

.logo {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: red;
  overflow: hidden;
  left: 5px;
  top: 10px;
}

.logo img {
  width: 60px;
  height: 60px;
}

.TopShopContent span {
  position: absolute;
  display: block;
  height: 60px;
  font-size: 18px;
  line-height: 60px;
  left: 75px;
  top: 5px;
  color: grey;
}

.CenterShopContent {
  height: 120px;
}

.Shopleft {
  position: relative;
  height: 120px;
  width: 50%;
  float: left;
}

.Shopleft table {
  position: absolute;
  width: 85%;
  height: 40%;
  text-align: center;
  top: 45px;
  right: 0px;
  line-height: 50%;
  border-right: 1px solid grey;
  font-size: 18px;
}

.Shoplefttop {
  font-size: 16px;
}

.Shopright {
  position: relative;
  height: 120px;
  width: 206.2px;

  float: right;
}

.Shopright table {
  position: absolute;
  width: 150px;
  height: 50%;
  left: 25px;
  top: 34px;
  text-align: center;
}

.score {
  color: green;
}

.active {
  color: red;
}

.scores {
  color: white;
  background-color: green;
}

.actives {
  background-color: red;
}

.DownShopContent {
  position: relative;
  height: 40px;
}

.DownShopContent div {
  position: absolute;
  width: 150px;
  height: 30px;
  background-color: red;
  top: 0px;
  left: 132px;
  text-align: center;
  line-height: 30px;
  border-radius: 8px;
  color: darkgrey;
  background-color: #f3f4fa;
}
</style>