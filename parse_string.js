function parseDateString(str) {
  const obj = {};
  let temp = "";
  for (const char of str) {
    if (char !== "-" && char !== "T" && char !== ":" && char !== ".") {
      temp += char;
    } else {
      if (obj.year === undefined) {
        obj.year = temp;
      } else if (obj.month === undefined) {
        obj.month = temp;
      } else if (obj.date === undefined) {
        obj.date = temp;
      } else if (obj.hour === undefined) {
        obj.hour = temp;
      } else if (obj.min === undefined) {
        obj.min = temp;
      } else if (obj.sec === undefined) {
        obj.sec = temp;
        return obj;
      }
      temp = "";
    }
  }
}

const str = "2023-01-17T06:11:45.172Z";
const obj = parseDateString(str);
console.log(obj);
