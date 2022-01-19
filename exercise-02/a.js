api(function (result) {
  console.log("result: ", result);
  api2(function (result2) {
    console.log("result2: ", result2);
    api3(function (result3) {
      console.log("result3: ", result3);
    });
  });
});

function api(fn) {
  fn(1);
}
function api2(fn) {
  fn(2);
}
function api3(fn) {
  fn(3);
}
