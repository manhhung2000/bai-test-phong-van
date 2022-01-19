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
    resolve();
  });
};

api(1)
  .then(
    api2(2)
      .then(api3(3))
      .catch((err) => {
        console.log(err);
      })
  )
  .catch((err) => {
    console.log(err);
  });
