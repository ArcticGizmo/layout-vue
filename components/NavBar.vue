<template>
  <div id="nav-bar">
    <div id="nav-bar-toggle">
      <button @click="toggleNavBar">Open navbar</button>
    </div>
    <div id="nav-bar-list" v-if="showNavBar">
      <router-link
        class="nav-bar-item"
        v-for="route in routeLinks"
        :key="route.path"
        :to="route.path"
      >{{route.name}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'z2NavBar',
  props: {
    routes: { type: Array, default: () => [] },
  },
  data: () => {
    return {
      showNavBar: false,
    };
  },
  computed: {
    routeLinks() {
      // grouping will go here when enabled

      // remove default * path from routes
      const displayRoutes = this.routes.filter(route => route.path !== '*');
      return displayRoutes;
    },
  },
  methods: {
    toggleNavBar() {
      this.showNavBar = !this.showNavBar;
    },
  },
};
</script>

<style>
</style>
