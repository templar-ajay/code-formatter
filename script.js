const inputEl = document.querySelector("#input");
const outputEl = document.querySelector("#output");


const check = {
  arr: ["function", "let", "const", "var"],
  addSpace: function (word) {
    let ret = false;
    this.arr.forEach((value) => {
      value === word ? (ret = true) : false;
    });
    return ret ? word + " " : word;
  },
  string: function (string) {
    const firstQuoteIndex = getFirstQuoteIndex(string)
    const firstQuoteType = string[firstQuoteIndex]
    const firstQuote = {
      firstQuoteType: firstQuoteType,
      firstQuoteIndex: firstQuoteIndex
    }
    console.log(`firstQuote`, firstQuote);
    const endOfFirstQuoteIndex = getFirstQuoteIndex((string.slice(firstQuoteIndex + 1)), firstQuoteType) + firstQuoteIndex + 1;
    const endOfFirstQuoteType = string[endOfFirstQuoteIndex - firstQuoteIndex]
    const endOfFirstQuote = {
      endOfFirstQuoteIndex: endOfFirstQuoteIndex,
      endOfFirstQuoteType: endOfFirstQuoteType
    }
    console.log(`endOfFirstQuote`, endOfFirstQuote);
  }
};
check.arr.push("hello");

input.addEventListener("input", async (e) => {
  const inputJS = e.target.value;
  const arr = check.string(inputJS)
  // const arr = inputJS.replace(/ {2,}/g, " ").split("\n").map(word => word.split(" ")).flat().map(word => check.addSpace(word));
  // arr.forEach(word => {
  //   outputEl.textContent += word;
  // })
  // console.log(arr);
})

function getFirstQuoteFirstIndex(string) { return Math.min(...["'", '"', '`'].map(q => string.indexOf(q) >= 0 ? string.indexOf(q) : string.length)) }
