export const waitFor = async time => {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

export const waitForTemplateRender = async (element, [selector, ...others], event = "templaterendered") => {
  var el = element.querySelector(selector);
  return new Promise(resolve => {
    if (el && el.hasLoaded) resolve(el);
    element.addEventListener(
      event,
      () => {
        const el = element.querySelector(selector);
        resolve(others?.length ? waitForTemplateRender(el, others, event) : el);
      },
      { once: true }
    );
  });
};

export const isEmpty = value => {
  if (!value) return true;
  return Object.keys(value).length === 0;
};
