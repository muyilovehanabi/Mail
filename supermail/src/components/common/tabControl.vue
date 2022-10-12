<template>
  <div class="tabControl">
    <div
      v-for="(item, index) in titles"
      :key="index"
      :class="{ active: index == currentIndex }"
      @click="control(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    control(index) {
      this.currentIndex = index;
      this.$emit("shift", index);
    },
  },
};
</script>

<style scoped>
.tabControl {
  margin-top: 0px;
  height: 42px;
  display: flex;
  background: white;
}

.tabControl div {
  text-align: center;
  height: 40px;
  flex: 1;
  /*  */
}

.tabControl div span {
  height: 40px;
  line-height: 40px;

  font-size: 18px;
}

.active {
  color: #ff69b4;
  border-bottom: 2px solid #ff69b4;
}
</style>