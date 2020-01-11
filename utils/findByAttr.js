export const findByTestAttr = (component, attr, value) => {
  const find = component.find(`[${attr}='${value}']`)
  return find;
}