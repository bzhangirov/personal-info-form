<template>
  <div class="container">
    <h1>Membership</h1>
    <div class="checkbox-container"
         v-for="item in membership"
         :key="item.id">
      <Checkbox @click="setMembership(item.id)"
                :value="item.checked"
                :id="item.id"/>
      <span class="text ml-5">{{ item.type }}</span>
    </div>
    <div class="text mt-20 mb-30">
      {{ description }}
    </div>
    <button class="btn next-btn"
            @click="nextStep">Continue</button>
    <button class="btn prev-btn"
            @click="previousStep">Back</button>
</div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import { mapMutations, mapGetters } from 'vuex'
import { Membership } from '@/types/personalInfo.interface'
import StepController from '@/mixins/stepController'
export default Vue.extend({
  name: 'Membership',
  layout: 'form-layout/FormLayout',
  mixins: [StepController],
  components: {
    Checkbox
  },
  computed: {
    ...mapGetters(['chosenRoute', 'membership']),
    description():string {
      return this.membership.find((item: Membership) => item.checked)?.description
    }
  },
  mounted() {
    this.browserInfo(this.$route.path)
  },
  methods: {
    ...mapMutations([
      'changeStepper',
      'setMembership',
      'browserInfo'
    ]),
  },
})
</script>

<style scoped>
.container {
  max-width: 22.5em;
}

.next-btn {
  margin-bottom: 1.5em;
}

.checkbox-container {
  display: flex;
  align-items: center;
  margin-bottom: 0.625em;
}
</style>
