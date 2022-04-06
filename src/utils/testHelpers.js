const findAttribute = (component, attr) => (
  component.find(`[data-test='${attr}']`)
);

export default { findAttribute };
