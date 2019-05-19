<template>
  <div id="layout">
    <z2-header/>
    <z2-nav-bar :routes="routes"/>
    <z2-footer/>
  </div>
</template>

<script>
import z2Header from './components/Header.vue';
import z2Footer from './components/Footer.vue';
import z2NavBar from './components/NavBar.vue';

export default {
  title: "z2Layout",
  components: {
    z2Header,
    z2Footer,
    z2NavBar,
  },
  props: {
    routes: { type: Array, default: () => [] },
  },
  methods: {
    method1() {
      
    }
  }
}
</script>

<style>

</style>
