<template>
  <div class="toptop">
    <NavBar>
      <div class="leftTitle" slot="left" @click="leftTitleClick">
        <div class="iconfontsss">&#xe63c;</div>
      </div>
      <div class="DetailChildTitle" slot="center">
        <div
          class="DetailChildTitlechildren"
          v-for="(title, index) in titles"
          :key="index"
          :class="{ active: currentIndex == index }"
          @click="changeTitleColor(index)"
        >
          {{ title }}
        </div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "../../NavBar.vue";

export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    changeTitleColor(index) {
      this.currentIndex = index;
      this.$emit("changeTitleColor", index);
    },
    leftTitleClick() {
      this.$router.back();
    },
  },
};
</script>

<style>
.toptop {
  position: sticky;
  top: 0px;
  z-index: 5;
  background-color: white;
}

.DetailChildTitle {
  display: flex;
}

.DetailChildTitlechildren {
  flex: 1;
  font-size: 16px;
  text-align: center;
  line-height: 44px;
}

.active {
  color: #ff69b4;
}

.leftTitle {
  display: flex;
}

.iconfontsss {
  flex: 1;
  height: 44px;
  line-height: 40px;
  color: grey;
}
</style>