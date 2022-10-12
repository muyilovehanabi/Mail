<template>
  <div class="Cart">
    <!-- <li v-for="(item, index) in cartList" :key="index">{{ item }}</li> -->
    <TheProduct
      v-for="(item, index) in cartList"
      :key="index"
      :product="item"
    ></TheProduct>
  </div>
</template>

<script>
import TheProduct from "./TheProduct.vue";

export default {
  data() {
    return {};
  },
  components: {
    TheProduct,
  },
  computed: {
    cartList() {
      return this.$store.state.cartList;
    },
  },
};
</script>

<style scoped>
.Cart {
  height: calc(100% - 44px - 60px);
  overflow: scroll;
  background-color: #e0e0e0;
}

/* li {
  height: 120px;
  background-color: yellow;
  border: 1px solid grey;
} */
</style>