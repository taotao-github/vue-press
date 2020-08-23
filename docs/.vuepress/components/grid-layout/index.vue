<template>
  <!-- <grid-layout-com /> -->
  <component v-if="dynamicComponent" :is="dynamicComponent"></component>
</template>

<script>
// import gridLayoutCom from './com'
export default {
  name: 'gridLayout',
  data() {
    return{
      dynamicComponent: null
    }
  },
  mounted () {
    import('./com').then(module => {
      this.dynamicComponent = module.default
    })
  }
}
</script>

<style>

</style>