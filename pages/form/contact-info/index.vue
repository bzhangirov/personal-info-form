<template>
<div class="container">
  <h1>Personal info</h1>
  <EditableForm />
  <button class="btn edit-btn"
          @click="addContactInfoItem">Add item</button>
  <button class="btn next-btn"
          @click="nextStep">Continue</button>
</div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'
import EditableForm from '@/components/EditableForm/index.vue'
import StepController from '@/mixins/stepController'

export default Vue.extend({
  name: 'ContactInfo',
  layout: 'form-layout/FormLayout',
  mixins: [StepController],
  components: {
    EditableForm,
  },
  computed: {
    ...mapGetters([
      'chosenRoute'
    ])
  },
  mounted() {
    this.browserInfo(this.$route.path)
  },
  methods: {
    ...mapMutations([
      'addContactInfoItem',
      'changeStepper',
      'browserInfo'
    ])
  }
})
</script>

<style scoped lang='scss'>
.edit-btn {
  text-align: left;
  background: none;
  border: none;
}
</style>
