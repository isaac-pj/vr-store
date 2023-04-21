export const waitFor = async time => {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};
