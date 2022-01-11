<template>
  <div>
    <OverviewModal />
    <div class="container">
      <h1>Overview</h1>
      <OverviewItems />
      <div class="btn edit-btn" @click="editUserInformation()">Edit information</div>

      <button class="btn next-btn" @click="sendRequest">Submit</button>
      <button class="btn prev-btn" @click="previousStep">Back</button>
    </div>
  </div>

</template>

<script lang='ts'>
import Vue from 'vue'
import OverviewItems from '@/components/OverviewItems/index.vue'
import OverviewModal from '@/components/OverviewModal/index.vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import StepController from '@/mixins/stepController'

export default Vue.extend({
  name: 'Overview',
  layout: 'form-layout/FormLayout',
  mixins: [StepController],
  components: {
    OverviewItems,
    OverviewModal,
  },
  mounted() {
    this.browserInfo(this.$route.path)
  },
  computed: {
    ...mapGetters([
      'chosenRoute'
    ])
  },
  methods: {
    ...mapMutations([
      'changeStepper',
      'editUserInformation',
      'resetState',
      'browserInfo'
    ]),
    ...mapActions(['saveInformation']),
    async sendRequest() {
      try {
        const {data} = await this.saveInformation()
        if (data?.status === 'ok') {
          alert('Information is successfully saved!')
          this.resetState()
          this.$router.push({path: this.chosenRoute})
        }
      } catch (e) {
        alert(e)
      }
    }
  }
})
</script>

<style scoped>
.next-btn {
  margin-bottom: 1.5em;
}
</style>
