<template>
  <footer role="banner">
    <div class="layout-footer-wrapper">
      <span class="copyright">©2019-{{nowDate}}</span>
    </div>
  </footer>
</template>

<script>
export default {
  title: 'z2Footer',
  computed: {
    nowDate() {
      const now = new Date();
      return now.getFullYear;
    },
  },
};
</script>

<style>
footer span {
  align: right;
  display: block;
}
</style>
