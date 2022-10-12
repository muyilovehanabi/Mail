<template>
  <div class="a">
    <nav-bar id="nav">
      <div slot="center" class="CartTop">购物车({{ cartListLength }})</div>
    </nav-bar>
    <TheCart></TheCart>
    <the-cart-bottom-bar></the-cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "../common/NavBar.vue";
import TheCart from "../common/ShopCartList/TheCart.vue";
import TheCartBottomBar from "../common/ShopCartList/TheCartBottomBar.vue";

export default {
  components: {
    NavBar,
    TheCart,
    TheCartBottomBar,
  },
  computed: {
    cartListLength() {
      return this.$store.state.cartList.length;
    },
  },
};
</script>

<style scoped>
.a {
  width: 100vw;
  height: 90vh;
  /* background-color: white; */
}

#nav {
  background-color: #ff69b4;
}

.CartTop {
  text-align: center;
  line-height: 44px;
  color: white;
  font-weight: 400;
}
</style>