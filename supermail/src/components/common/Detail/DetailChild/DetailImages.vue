<template>
  <div class="DetailImagesFrame">
    <div v-if="detailInfo.desc">{{ detailInfo.desc }}</div>
    <div
      class="DetailImagesFramedown"
      v-for="(item, index) in lists"
      :key="index"
    >
      <img :src="item" alt="" @load="imgLoad(index)" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  computed: {
    lists() {
      return this.detailInfo.detailImage[0].list;
    },
  },

  methods: {
    imgLoad(index) {
      this.$emit("imgLoad", index);
      // console.log("图片加载完毕");
    },
  },
};
</script>

<style>
.DetailImagesFrame {
  width: 100vw;
  background-color: white;
  margin-top: 10px;
  text-indent: 2em;
  color: darkgrey;
  /* overflow: hidden; */
}

.DetailImagesFramedown {
  height: auto;
}

.DetailImagesFramedown img {
  /* float: left; */
  margin-left: -32px;
  width: 100vw;
}
</style>