function parseDateString(str) {
  return {
    year: str.substring(0, 4),
    month: str.substring(5, 7),
    date: str.substring(8, 10),
    hour: str.substring(11, 13),
    min: str.substring(14, 16),
    sec: str.substring(17, 19),
  };
}

const str = "2023-01-17T06:11:45.172Z";
const obj = parseDateString(str);
console.log(obj);
