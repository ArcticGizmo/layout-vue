<template>
  <div id="layout">
    <z2-header @click="toggleNavBar"/>
    <z2-nav-bar :routes="routes" :show="showNavBar" />
    <router-view class="view"></router-view>
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
  data: () => {
    return {
      showNavBar: false,
    }
  },
  methods: {
    toggleNavBar() {
      this.showNavBar = !this.showNavBar;
    }
  }
}
</script>

<style>
body {
  margin: 0;
  height: 100%;
  min-height: 100%;
  background-color: pink;
}

#layout {
  margin: 0;
}

#page {
  height: 100%;
  min-height: 100%;
  width: 100%;
  margin: 0;
  background-color: grey;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
</style>
