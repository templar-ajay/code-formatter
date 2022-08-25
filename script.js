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
};
check.arr.push("hello");

input.addEventListener("input", async (e) => {
    const inputJS = e.target.value;
    const arr = inputJS.replace(/ {2,}/g, " ").split(" ").map(word => check.addSpace(word));
    arr.forEach(word => {
        outputEl.textContent += word;
    })
})

