<template>
  <div id="layout">
    <z2-header/>
    <z2-footer/>
  </div>
</template>

<script>
import z2Header from './components/Header.vue';
import z2Footer from './components/Footer.vue';

export default {
  title: "z2Layout",
  components: {
    z2Header,
    z2Footer,
  },
  props: {

  },
  methods: {
    method1() {
      
    }
  }
}
</script>

<style>

</style>
