<template>
<div>
  <div class="overview-item">
    <div class="text font-bold title">First name:</div>
    <div class="text">{{ getUserInfo('firstName') }}</div>
  </div>
  <div class="overview-item">
    <div class="text font-bold title">Last name:</div>
    <div class="text">{{ getUserInfo('lastName') }}</div>
  </div>
  <div class="overview-item">
    <div class="text font-bold title">E-mail:</div>
    <div class="text">{{ getUserInfo('email') }}</div>
  </div>
  <div class="overview-item" v-for="item in contactInfo" :key="item.id">
    <div class="text font-bold title">Phone:</div>
    <div class="text">{{ item.phone }}</div>
  </div>
  <div class="overview-item">
    <div class="text font-bold title">Membership:</div>
    <div class="text">{{ chosenMembership.type }}</div>
  </div>
</div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { INPUT_ATTRIBUTES } from '@/constants'
export default Vue.extend({
  name: 'OverviewItem',
  inputAttributes: INPUT_ATTRIBUTES,
  computed: {
    ...mapGetters([
      'getUserInfo',
      'membership',
      'contactInfo',
      'chosenMembership'
    ])
  }
})
</script>

<style scoped lang='scss'>
.overview-item {
  display: grid;
  grid-template-columns: repeat(2, 150px);
  margin-bottom: 1.875em;
}

.title {
  margin-right: 3.125em;
}
</style>
