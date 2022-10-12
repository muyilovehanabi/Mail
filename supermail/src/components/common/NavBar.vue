<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  height: 44px;
  margin-top: 0px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  display: flex;
  position: sticky;
  top: 0px;
  z-index: 5;
}

.left {
  width: 50px;
  height: 44px;

  float: left;
}

.right {
  width: 50px;
  height: 44px;

  float: right;
}

.center {
  flex: 1;
}
</style>