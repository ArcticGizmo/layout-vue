<template>
  <footer id="z2-footer" role="banner">
    <div class="z2-footer-wrapper">
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
      return now.getFullYear();
    },
  },
};
</script>

<style>
footer span {
  text-align: right;
  padding-right: 2rem;
  display: block;
}

.z2-footer-wrapper {

}

#z2-footer {
  flex-shrink: 0;
  min-bottom: 0;
  width: 100%;
  background-color: blue;
}
</style>
