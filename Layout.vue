<template>
  <div id="layout">
    <z2-header @click="openNavBar"/>
    <z2-nav-bar 
      v-show="showNavBar"
      :routes="routes" 
      @close="closeNavbar"
      @select="selected"
    />
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
    closeNavbar() {
      this.showNavBar = false;
    },
    openNavBar() {
      this.showNavBar = true;
    },
    selected(route) {
      console.dir(route);
    }
  }
}
</script>

<style>
html {
  background-color: red;
}

body {
  margin: 50px;
  height: 100%;
  background-color: pink;
}

#layout {
  box-sizing: border-box;
  margin: 0;
}

#page {
  height: 100%;
  width: 100%;
  margin: 0;
  background-color: grey;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
</style>
