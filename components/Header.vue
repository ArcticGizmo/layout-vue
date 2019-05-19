<template>
  <header role="banner">
    <div class="layout-banner-wrapper">
      <div class="menu-btn-wrapper">
        <i-bar color="green" :strokeWidth="2"/>
      </div>
      <div class="header text">
        <span>This is some title text</span>
      </div>
    </div>
  </header>
</template>

<script>
import iBar from './../icons/iBars.vue';

export default {
  title: "z2Header",
  components: {
    iBar,
  },
  data: () => {
    return {
    }
  },
}
</script>

<style>
header {
  box-sizing: border-box;
  width: 100%;
  display: block;
  height: 4rem;
  background-color: orange;
}

.layout-banner-wrapper {
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  height: 100%;
  align-items: center;
}

.menu-btn-wrapper {
  padding-right: 1rem;
  height: 22px;
}
</style>
