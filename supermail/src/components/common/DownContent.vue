<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>