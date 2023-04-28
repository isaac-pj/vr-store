export const waitFor = async time => {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

export const waitForTemplateRender = async (element, [selector, ...others]) => {
  return new Promise(resolve => {
    element.addEventListener(
      "templaterendered",
      () => {
        const el = element.querySelector(selector);
        resolve(others?.length ? waitForTemplateRender(el, others) : el);
      },
      { once: true }
    );
  });
};

export const isEmpty = value => {
  if (!value) return true;
  return Object.keys(value).length === 0;
};
