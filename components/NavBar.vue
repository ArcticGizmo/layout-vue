<template>
  <div id="z2-nav-bar">
    <transition name="modal">
      <div class="modal-mask" @click.stop="closeNavBar">
        <div class="modal-container">
          <div 
            v-for="route in routeLinks" 
            :key="route.path"
            class="nav-item" 
            :class="showHighlight(route)" 
            @click.capture="select(route)"
          >
            * {{route.name}}
          </div>
        </div> 
      </div>
    </transition>
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
      selectedRoutePath: null,
    };
  },
  computed: {
    routeLinks() {
      // cascading trees will be calculated here

      // remove default * path from routes
      const displayRoutes = this.routes.filter(route => route.path !== '*');
      return displayRoutes;
    },
  },
  methods: {
    closeNavBar() {
      this.$emit('close')
    },
    select(route) {
      this.selectedRoutePath = route.path;
      this.$emit('select', route);
      this.$router.push(route.path);
    },
    showHighlight(route) {
      let show = false;
      if (route.path === this.selectedRoutePath) {
        show = true;
      }
      return {
        'highlight': show,
      }
    }
  }
};
</script>

<style>
.highlight {
  background-color: cyan;
}

.nav-item {
  height: 100%;
  font-size: 2rem;
  padding: 0.5rem;
}

.nav-item:hover {
  background-color: orange;
}






/* ----------------------- modal --------------------------*/
.modal-mask {
  box-sizing: border-box;
  padding: 1rem 1rem;

  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  background-color: blue;
  transition: opacity .3s ease;
  overflow: auto;
}

.modal-wrapper {

  background-color: purple;
  width: 100%;
}

.modal-container {
  width: 100%;
  background-color: green;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}


/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
