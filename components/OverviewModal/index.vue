<template>
  <div class="modal" v-show="isExit">
    <div class="modal_wrapper">
      <div class="modal_head">
        <h1>Edit information</h1>
        <div class="exit_modal">
          <div class="text button-close"
               @click="closeUserModal()">Close</div>
        </div>
      </div>
      <div class="modal-body">
        <EditableForm :isModal="true" />
        <button class="btn next-btn"
                @click="setIsExit(false)">Save</button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'
import EditableForm from '@/components/EditableForm/index.vue'

export default Vue.extend({
  name: 'OverviewModal',
  layout: 'form-layout/FormLayout',
  components: {
    EditableForm,
  },
  computed: {
    ...mapGetters([
      'isExit'
    ])
  },
  methods: {
    ...mapMutations([
      'setIsExit',
      'closeUserModal',
    ]),
  }
})
</script>

<style scoped lang='scss'>
.modal {
  position: fixed;
  background: $white-4;
  box-shadow: 0 0 0.75em 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.625em;
  z-index: 2;
  max-width: 22.5em;
  width: 100%;
  padding: 1.5625em;
}

.modal_head {
  display: flex;
  justify-content: space-between;
}
.modal_wrapper {
  width: 95%;
  max-width: 55em;
  top: 1em;
}

.next-btn {
  width: 100%;
}

.button-close {
  cursor: pointer;
}

</style>
