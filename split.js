function parseDateString(str) {
  const obj = {};
  let arr = str.split("-");
  obj.year = arr[0];
  obj.month = arr[1];
  arr = arr[2].split("T");
  obj.date = arr[0];
  arr = arr[1].split(":");
  obj.hour = arr[0];
  obj.min = arr[1];
  obj.sec = arr[2].split(".")[0];
  return obj;
}

const str = "2023-01-17T06:11:45.172Z";
console.log(parseDateString(str));
