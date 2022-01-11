<template>
  <div></div>
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  name: 'index',
  layout: 'form-layout/FormLayout',
  created() {
    this.$nuxt.$router.replace({ path: '/form/contact-info'})
  },
})
</script>

<style scoped></style>
