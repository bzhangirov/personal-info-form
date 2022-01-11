<template>
  <div class="checkbox">
  <input :id="$attrs.id"
         :checked="$attrs.value"
         type="checkbox"
         hidden
         v-on="$listeners"
  />
  <label :for="$attrs.id" />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  inheritAttrs: false,
  name: 'Checkbox',
})
</script>

<style scoped lang='scss'>
input[type="checkbox"]:checked ~ label {
  border-color: $light-blue;
  background: $light-blue;
  background-position: center center;
}

input[type="checkbox"] ~ label {
  display: block;
  width: 1.125em;
  height: 1.125em;
  border-radius: 0.3125em;
  opacity: 1;
  border: 0.0625em solid $light-blue;
  box-sizing: border-box;
  cursor: pointer;
}

</style>
