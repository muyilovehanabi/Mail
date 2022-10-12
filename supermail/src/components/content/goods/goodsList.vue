<template>
  <div ref="Height" class="goodsList">
    <goodsListItem :goods="item" v-for="(item, index) in goods" :key="index" />
  </div>
</template>

<script>
import goodsListItem from "./goodsListItem.vue";

export default {
  components: {
    goodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  updated() {
    this.$bus.$emit("submitHeight", this.$refs.Height.offsetHeight);
  },
  methods: {},
};
</script>

<style scoped>
.goodsList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: white;
  /* padding: 2px; */
  height: auto;
  /* overflow: hidden; */
}
</style>