<template>
  <svg 
    :style="styles"
    viewBox="0 0 22 22" 
    >
      <path :stroke="color" :stroke-width="strokeWidth" d="M0 4.5h22m-22 6h22m-22 6h22"></path>
  </svg>
</template>

<script>
import scale from './icon';

export default {
  name: 'BarsIcon',
  props: {
    height: { type: String, default: "22px"},
    width: {type: String, default: "22px"},
    color: {type: String, default: "black"},
    scale: {type: Number, default: 1},
    strokeWidth: {type: Number, default: 1},
  },
  computed: {
    styles() {
      const styles = {
        width: scale(this.width, this.scale),
        height: scale(this.height, this.scale),
      }
      // console.dir(styles);
      return styles;
    } 
  }
}
</script>

<style>

</style>
