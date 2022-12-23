const box1 = document.querySelector(".firstdiv");
const box2 = document.querySelector(".secondiv");
const box3 = document.querySelector(".thirdiv");
const box4 = document.querySelector(".fourthdiv");
const box5 = document.querySelector(".fifthdiv");
const box6 = document.querySelector(".sixthdiv");
const btn = document.querySelector("button");
console.log(box1);
const arr = ["yellow", "black", "green", "red", "blue"];

box1.addEventListener("click", () => {
  console.log("heelloe");
  const co = Math.floor(Math.random() * 5);
  console.log(co);
  box1.style.backgroundColor = arr[co];
  const result = arr[co];
  return result
});
box2.addEventListener("click", () => {
  console.log("heelloe");
  const co1 = Math.floor(Math.random() * 5);
  console.log(co1);
  box2.style.backgroundColor = arr[co1];
  const result2 = arr[co1];
  
});

box3.addEventListener("click", () => {
  console.log("heelloe");
  const co = Math.floor(Math.random() * 5);
  console.log(co);
  box3.style.backgroundColor = arr[co];
});
box4.addEventListener("click", () => {
  console.log("heelloe");
  const co = Math.floor(Math.random() * 5);
  console.log(co);
  box4.style.backgroundColor = arr[co];
});
box5.addEventListener("click", () => {
  console.log("heelloe");
  const co = Math.floor(Math.random() * 5);
  console.log(co);
  box5.style.backgroundColor = arr[co];
});
box6.addEventListener("click", () => {
  console.log("heelloe");
  const co = Math.floor(Math.random() * 5);
  console.log(co);
  box6.style.backgroundColor = arr[co];
});

// btn.addEventListener("click", () => {
//   checker();
// });
