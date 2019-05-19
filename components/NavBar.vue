<template>
  <div id="z2-nav-bar" v-if="show" :style="heightStyle">
    <div id="nav-bar-list">
      {{heightStyle}}
      <router-link
        class="nav-bar-item"
        v-for="route in routeLinks"
        :key="route.path"
        :to="route.path"
      >
        {{route.name}}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'z2NavBar',
  props: {
    routes: { type: Array, default: () => [] },
    show: { type: Boolean, default: false },
  },
  data: () => {
    return {
      showNavBar: false,
    };
  },
  computed: {
    heightStyle() {
      console.dir('lol')
      const headerHeight = document.getElementById('z2-header').getBoundingClientRect().height;
      const footerHeight = document.getElementById('z2-footer').getBoundingClientRect().height;
      const navHeight = window.innerHeight - headerHeight - footerHeight;
      return {
        height: `${navHeight}px`
      }; 
    },
    routeLinks() {
      // grouping will go here when enabled

      // remove default * path from routes
      const displayRoutes = this.routes.filter(route => route.path !== '*');
      return displayRoutes;
    },
  },
};
</script>

<style>
#z2-nav-bar {
  width: 10rem;
  height: 100%;
  outline: magenta 1px solid;
  float: left;
}

#nav-bar-list {
  display: flex;
  flex-direction: column;
}
</style>
