const api = (result) => {
  return new Promise(function (resolve, reject) {
    console.log("result", result);
    resolve();
  });
};

const api2 = (result) => {
  return new Promise(function (resolve, reject) {
    console.log("result2", result);
    resolve();
  });
};

const api3 = (result) => {
  return new Promise(function (resolve, reject) {
    console.log("result3", result);
    // resolve();
  });
};

const result = async () => {
  await api(1);
  await api2(2);
  await api3(3);
};

result();
