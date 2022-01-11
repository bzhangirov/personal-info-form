import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'
export default Vue.extend({
  computed: {
    ...mapGetters(['chosenRoute'])
  },
  methods: {
    ...mapMutations([
      'changeStepper',
    ]),
    previousStep(): void {
      this.changeStepper({
        fullPath: `${this.$route.path }`,
        back: true
      })
      this.$router.push({ path: this.chosenRoute})
    },
    nextStep(): void {
      this.changeStepper({
        fullPath: `${this.$route.path}`
      })
      this.$router.push({ path: this.chosenRoute})
    },
  }
})
