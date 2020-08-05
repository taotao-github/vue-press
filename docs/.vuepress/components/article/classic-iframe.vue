<template>
  <iframe :src="url" frameborder="0" class="classic-article-iframe" />
</template>

<script>
export default {
  name: 'articleIframe',
  props: {
    url: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.classic-article-iframe{
  width: 100%;
  height: calc(100vh - 12rem);
}
</style>