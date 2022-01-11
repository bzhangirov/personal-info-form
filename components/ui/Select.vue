<template>
<div class="custom-select">
  <div class="custom-select">
    <div :class="['select-container', { open: show }]">
      <input class="selected"
             :class="{ open: show }"
             @focus="show = !show"
             :value="value"
             @blur="show = false"
             :readonly="true"/>
      <div
        v-if="!disabled"
        :class="['arrow', { active: show }]"
        @click="show = !show"
      ></div>
    </div>
    <div class="items" :class="{ selectHide: !show }">
      <div
        v-for="item of selectOptions"
        :key="item.id"
        @mousedown="changeOption(item)">
        {{ item.title }}
      </div>
    </div>
  </div>
</div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { InputAttributeOptions } from '@/types/vue-shim'
export default Vue.extend({
  name: 'Select',
  props: {
    selectOptions: {
      type: Array,
      required: true,
    },
    disabled: {
      type: Boolean,
      default() {
        return false;
      }
    },
    value: {
      type: String
    }
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    changeOption(event: InputAttributeOptions) {
      this.show = false;
      this.$emit('changeOptions', event)
    }
  }
})
</script>

<style scoped lang='scss'>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 1.875em;
  line-height: 2.9375em;
  max-width: 5.3125em;
}
.select-container {
  height: 100%;
  background: $white-3 0 0 no-repeat padding-box;
  border: 0.125em solid $border-light-grey;
  border-radius: 0.5em 0 0 0.5em;
  opacity: 1;
  display: flex;
  align-items: center;
  padding: 0 0.1875em;
}

.select-container.open {
  background: $white-5;
}

.select-container:hover {
  background: $white-5;
}

.arrow {
  cursor: pointer;
  border-left: 0.3125em solid transparent;
  border-right: 0.3125em solid transparent;
  border-top: 0.3125em solid $grey-2;
}

.selected {
  cursor: pointer;
  user-select: none;
  text-align: center;
  font-weight: 300;
  font-size: 0.75em;
  border: none;
  background: transparent;
  width: 100%;
  height: 1.875em;
  outline: none;
}

.items {
  max-height: 12.5em;
  color: $white-4;
  overflow-y: auto;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  background: $white-4;
  box-shadow: 0 0.25em 1em rgba(16, 8, 63, 0.12);
  border-radius: 0 0 0.75em 0.75em;
  font-size: 0.75em;
}

.items > div {
  color: $black;
  text-align: center;
  cursor: pointer;
  user-select: none;
}

.items > div:hover {
  background: $white-5;
}

.selectHide {
  display: none;
}
</style>
