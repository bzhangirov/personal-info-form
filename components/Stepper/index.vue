<template>
  <div class="stepper">
    <div class="step_container"
         v-for="(step, index) in stepper" :key="step.id"
         :class="{
           'step_container--first' : !index,
           'step_container--last' : index === stepper.length - 1,
           'step--active': step.active || step.isDone,
           'step-line--active': step.isDone,
          }">
      <div class="step">
        <div class="step_number" v-text="step.id"></div>
        <div class="step_label"  v-text="step.label"></div>
      </div>

      <div class="step_line" v-if="index < stepper.length - 1">
          <div class="step_line_outline"></div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  name: 'Stepper',
  computed: {
    ...mapGetters(['stepper']),
  },
})
</script>

<style scoped lang='scss'>

.stepper {
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}

.step_container {
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 1.5em 0;
}

.step_container--first {
  justify-content: center;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 4.5em;
  cursor: pointer;
}

.step_number {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.75em;
  height: 1.75em;
  border-radius: 50%;
  border: .125em solid $white-2;
  text-align: center;
  font-size: 1em;
  color: $white-2;
  transition: all 200ms;
}
.step_number {
  background-color: $white;
  text-align: center;
  font-size: 1.5em;
  line-height: 2.125em;
  font-weight: bold;
  letter-spacing: 0;
  color: $border-light-grey;
}

.step--active {
  & .step_number {
    background-color: $white;
    border: .125em solid $light-blue;
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
    line-height: 2.125em;
    letter-spacing: 0;
    color: $light-blue;
    opacity: 1;
  }

  & .step_label {
    color: $dark-grey;
  }
}

.step-line--active {
  & .step_line_outline {
    border-bottom: .125em solid $light-blue;
  }
}

  .step_label {
    font-weight: 300;
    font-size: .75em;
    line-height: .875em;
    text-align: center;
    color: $border-light-grey;
    margin-top: .5em;
  }

  .step_line {
    width: 7em;
  }
  .step_line_outline {
    height: 1.5em;
    max-width: 12em;
    border-bottom: .125em solid $white-2;
    transition: all 200ms;
    width: 8.65em;
    transform: translateX(-0.75em);
  }
</style>
