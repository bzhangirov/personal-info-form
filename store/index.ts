import {
  ContactInfoArguments,
  ContactInfoInterface,
  FormInfo,
  Membership,
  UserInfo
} from '@/types/personalInfo.interface'
import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { PERSONAL_INFORMATION, URL } from '@/constants'
import { phoneValidator } from '@/mixins/validators'

let savedFormInfo: FormInfo | null = null;

export const state = () => ({
  ...PERSONAL_INFORMATION(),
})
export type RootState = ReturnType<typeof state>
export const getters: GetterTree<RootState, RootState> = {
  chosenRoute: state => state.chosenRoute,
  stepper: state => state.stepper,
  contactInfo: state => state.formInfo.contactInfo,
  membership: state => state.formInfo.membership,
  isExit: state => state.isExit,
  getUserInfo: state => (key: keyof FormInfo) => state.formInfo[key],
  formInfo: state => state.formInfo,
  chosenMembership: state => state.formInfo.membership.find((item: Membership) => item.checked)
}

export const mutations: MutationTree<RootState> = {
  changeStepper(state, { fullPath, back = false }: { fullPath: string, back: boolean }) {
    const findActive = state.stepper.find(item => item.chosenRoute === fullPath)
    if (findActive) {
      const nextId = back ? findActive.id - 1 : findActive.id + 1
      state.stepper = state.stepper.map((item) => ({
        ...item,
        active: item.id === nextId,
        isDone: item.id < nextId
      }))
      state.chosenRoute = state.stepper.find(item => item.id === nextId)?.chosenRoute || ''
    }
  },
  browserInfo(state, fullPath: string) {
    const findRoute = state.stepper.find(item => item.chosenRoute === fullPath)
    if (findRoute) {
      state.stepper = state.stepper.map((item) => ({
        ...item,
        active: item.id === findRoute.id,
        isDone: item.id < findRoute.id
      }))
      state.chosenRoute = findRoute.chosenRoute
    }
  },
  editUserInfo(state, { field, value }: { field: keyof UserInfo, value: string }) {
    state.formInfo[field] = value
  },
  editUserInformation(state) {
    savedFormInfo = JSON.parse(JSON.stringify(state.formInfo));
    state.isExit = true
  },
  closeUserModal(state) {
    if(savedFormInfo) {
      state.formInfo = savedFormInfo
    }
    state.isExit = false
  },
  changeContactInfoTitle(state, { id, value }: ContactInfoArguments) {
    const findTitle = state.formInfo.contactInfo.find((item: ContactInfoInterface) => item.id === id)
    if (findTitle) {
      findTitle.title = value
    }
  },
  setPhoneValue(state, { id, value }: ContactInfoArguments) {
    const checkPhone: RegExpMatchArray | null = phoneValidator(value);
    if (checkPhone) {
      value = `+${checkPhone[1]} ${checkPhone[2]}`;
    }
    const findPhone = state.formInfo.contactInfo.find((item) => item.id === id)
    if (findPhone) {
      findPhone.phone = value
    }
  },
  setMembership(state, id: number) {
    state.formInfo.membership = state.formInfo.membership.map((item) => ({
      ...item,
      checked: item.id === id,
    }))
  },
  deleteContactInfoItem (state, id: number) {
    const index = state.formInfo.contactInfo.findIndex(item => item.id === id)
    if (index > -1) {
      state.formInfo.contactInfo.splice(index, 1);
    }
  },
  addContactInfoItem(state) {
    const nextId: number = state.formInfo.contactInfo.reduce((result, { id }) => result > id ? result : id, 0) + 1
    state.formInfo.contactInfo.push({ id: nextId, title: 'Home', phone: '' })
  },
  setIsExit(state, value: boolean) {
    state.isExit = value
  },
  resetState (state) {
    Object.assign(state, PERSONAL_INFORMATION())
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async saveInformation({ getters }) {
    const data = {
      firstName: getters.getUserInfo('firstName'),
      lastName: getters.getUserInfo('lastName'),
      email: getters.getUserInfo('email'),
      phone: getters.contactInfo,
      membership: getters.chosenMembership.type
    }
    return await this.$axios.post(URL, data)

  },
}
