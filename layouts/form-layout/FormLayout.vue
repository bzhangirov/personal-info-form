<template>
<div class="main">
  <div v-show="isExit" class="modal-bg"></div>
  <div class="content">
    <Stepper v-if="!isExit"/>
    <div class="forms">
      <nuxt />
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Stepper from '@/components/Stepper/index.vue'
import { mapGetters, mapMutations } from 'vuex'
export default Vue.extend({
  name: 'FormLayout',
  components: {
    Stepper
  },
  computed: {
    ...mapGetters(['chosenRoute', 'isExit']),
  },
  methods: {
    ...mapMutations(['changeStepper', 'setIsExit']),
  }
})
</script>

<style lang="scss"></style>
