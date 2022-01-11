<template>
<div class="input-block">
  <div class="label" v-text="$attrs.label" v-if="$attrs.label"></div>
  <input
    :id="$attrs.id"
    :value="value"
    :type="$attrs.type"
    :maxlength="$attrs.maxLength"
    @input="$emit('input', $event.target.value)"
    :style="$attrs['custom-style']"
  />
</div>
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  name: 'Input',
  props: {
    value: {
      type: [String, Number]
    },
  },
})
</script>

<style scoped lang='scss'>
.input-block {
  width: 100%;
  margin-bottom: 1em;
}
.label {
  text-align: left;
  font-size: 0.75em;
  font-weight: 700;
  line-height: 1em;
  font-family: "Open Sans", sans-serif;
  letter-spacing: 0;
  color: $dark-grey;
  opacity: 1;
  margin-bottom: 0.5em;
}

input {
  font-family: "Montserrat", sans-serif;
  width: 100%;
  box-sizing: border-box;
  background: $white-4 0 0 no-repeat padding-box;
  border: 0.125em solid $border-light-grey;
  border-radius: 0.5em;
  opacity: 1;
  height: 2.5em;
  padding-left: 0.5em;
}

input:focus {
  outline: none;
}


</style>
