export const post = (url, data) => {
  return new Promise(resolve => {
    fetch(url, {
      method: "POST",
      body: data
    }).then(result => {
      resolve(result);
    });
  });
};

export const get = url => {
  return new Promise(resolve => {
    fetch(url).then(result => {
      resolve(result);
    });
  });
};
