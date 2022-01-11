export interface ContactInfoInterface {
  id: number,
  title: string,
  phone: string
}
export interface Membership {
  id: number,
  type: string,
  checked: boolean,
  description: string
}

export interface UserInfo {
  firstName: string,
  lastName: string,
  email: string
}

export interface FormInfo {
  contactInfo: Array<ContactInfoInterface>
  membership: Array<Membership>,
  firstName: string,
  lastName: string,
  email: string
}

export interface ContactInfoArguments {
  id: number,
  value: string
}
export interface stepperItem {
  id: number,
  active: boolean,
  label: string,
  routeName: string,
  isDone: boolean,
  chosenRoute: string
}
