<template>
  <div class="CartBottomBar">
    <div class="anniu">
      <input
        type="checkbox"
        :checked="SelectAll"
        ref="check"
        @click="quanxuan"
      />
      <span>全选</span>
    </div>
    <div class="heji">合计:￥{{ totalPrice }}</div>
    <div class="calculate">去计算({{ calculated.length }})</div>
  </div>
</template>

<script>
export default {
  methods: {
    quanxuan() {
      this.$store.state.cartList.filter((item) => {
        item.checked = this.$refs.check.checked;
      });
    },
  },
  computed: {
    totalPrice() {
      return this.$store.state.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0)
        .toFixed(2);
      // toFixed(); 是用来保留小数的，里面是2那就是保留两位小数
    },
    calculated() {
      return this.$store.state.cartList.filter((item) => {
        return item.checked;
      });
    },

    SelectAll() {
      return !this.$store.state.cartList.filter((item) => {
        return !item.checked;
      }).length;
    },
  },
};
</script>

<style scoped>
.CartBottomBar {
  position: sticky;
  bottom: 0px;
  height: 60px;
  background-color: #e0ffff;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  display: flex;
}

.anniu {
  width: 20%;
  display: flex;
}

.anniu input {
  width: 40px;
  width: 20px;
  height: 20px;
  margin-top: 19px;
  margin-left: 15px;
  visibility: hidden;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.anniu span {
  flex: 1;
  display: block;
  text-align: center;
  line-height: 60px;
  font-size: 16px;
  color: grey;
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

.heji {
  flex: 1;
  text-align: left;
  line-height: 59px;
  font-size: 18px;
  color: grey;
}

.calculate {
  width: 30%;
  text-align: center;
  font-size: 16px;
  line-height: 59px;
  color: white;
  font-weight: 500;
  background-color: #ff5200;
}
</style>
