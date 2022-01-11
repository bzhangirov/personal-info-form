export function phoneValidator (value: string) {
  return value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,8})/);
}
