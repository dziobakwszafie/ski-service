export const sendDataToApi = formData => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(formData);
      resolve();
    }, 2000);
  });
};

export default sendDataToApi;
