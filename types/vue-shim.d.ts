import Vue from 'vue';

declare module '*.vue' {
  export default Vue;
}
export interface InputAttributeOptions {
  id: number,
  title: string
}

export interface InputStyles {
  borderLeft: string,
  borderTopLeftRadius: string,
  borderBottomLeftRadius: string
}

interface InputAttributesOptions {
  options: Array<InputAttributeOptions>,
  inputStyles: InputStyles
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    inputAttributes?: InputAttributesOptions
  }
}
