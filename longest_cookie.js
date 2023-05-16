const { readFile } = require("node:fs/promises");

async function findLongestCookie() {
  const fileName =
    "/Users/mihailparamonov/Downloads/JSON.exerceses/www.geeksforgeeks.org.har";
  const data = await readFile(fileName, "utf8");
  const dataParsed = JSON.parse(data);
  const cookieStr = dataParsed.log.entries[0].request.headers[8].value;
  const cookieArr = cookieStr.split("; ");
  let maxLength = 0;
  let longestCookie = "";
  for (let cookie of cookieArr) {
    const [cookieName, cookieValue] = customSplit(cookie);
    if (cookieValue.length > maxLength) {
      maxLength = cookieValue.length;
      longestCookie = cookieName;
    }
  }
  // console.log(cookieArr);
  console.log(longestCookie, maxLength);
}
findLongestCookie();

function customSplit(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "=") {
      arr.push(str.slice(0, i), str.slice(i + 1));
      break;
    }
  }
  return arr;
}
