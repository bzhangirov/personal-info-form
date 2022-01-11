<template>
<div class="editable-form">
  <Input label="First name"
         id="firstName"
         v-model="firstName" />
  <Input label="Last name"
         v-model="lastName" />
  <Input label="Email"
         v-model="email" />
  <div class="d-flex"
       v-for="item in contactInfo"
       :key="item.id">
    <Select :select-options="$options.inputAttributes.options"
            :value="item.title"
            @changeOptions="changeContactInfoTitle({id: item.id, value: $event.title })" />
    <Input :value="item.phone"
           type="phone"
           max-length="13"
           :custom-style="$options.inputAttributes.inputStyles"
           @input="setPhoneValue({ id: item.id, value: $event })"
    />
    <button v-if="!isModal"
            class="delete-btn"
            @click="deleteContactInfoItem(item.id)">Delete</button>
  </div>
  <div class="checkbox-container" v-if="isModal">
    <div class="checkbox-item"
         v-for="item in membership"
         :key="item.id">
      <Checkbox @click="setMembership(item.id)"
                :value="item.checked" :id="item.id"/>
      <span class="text ml-5">{{ item.type }}</span>
    </div>
  </div>
</div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Input from '@/components/ui/Input.vue'
import Select from '@/components/ui/Select.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import { mapGetters, mapMutations } from 'vuex'
import { INPUT_ATTRIBUTES } from '@/constants'
export default Vue.extend({
  name: 'EditableForm',
  inputAttributes: INPUT_ATTRIBUTES,
  components: {
    Input,
    Select,
    Checkbox
  },
  props: {
    isModal: {
      type: Boolean,
      default() {
        return false;
      }
    },
  },
  computed: {
    ...mapGetters([
      'getUserInfo',
      'membership',
      'contactInfo',
      'formInfo',
    ]),
    firstName: {
      get() {
        return this.getUserInfo('firstName')
      },
      set(value) {
        this.editUserInfo({ field: 'firstName', value })
      }
    },
    lastName: {
      get() {
        return this.getUserInfo('lastName')
      },
      set(value) {
        this.editUserInfo({ field: 'lastName', value })
      }
    },
    email: {
      get() {
        return this.getUserInfo('email')
      },
      set(value) {
        this.editUserInfo({ field: 'email', value })
      }
    }
  },
  methods: {
    ...mapMutations([
      'setPhoneValue',
      'editUserInfo',
      'setMembership',
      'changeContactInfoTitle',
      'deleteContactInfoItem'
    ]),
  }
})
</script>

<style scoped lang='scss'>
.checkbox-container {
  display: flex;
  margin-bottom: 1.875em;
}
.next-btn {
  width: 100%;
}
.checkbox-item {
  display: flex;
  margin-right: 1.25em;
  align-items: center;
}
.delete-btn {
  background: $white-3 0 0 no-repeat padding-box;
  border: 0.125em solid $border-light-grey;
  border-radius: 0.5em;
  opacity: 1;
  height: 2.5em;
  margin-left: 0.75em;
  cursor: pointer;
}
</style>
