const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".alertbtn");
const prebtn1 = document.querySelector(".prebtn1");
const prebtn2 = document.querySelector(".prebtn2");
const prebtn3 = document.querySelector(".prebtn3");
const prebtn4 = document.querySelector(".prebtn4");
const prebtn5 = document.querySelector(".prebtn5");
const prebtn6 = document.querySelector(".prebtn6");
const prebtn7 = document.querySelector(".prebtn7");
const prebtn8 = document.querySelector(".prebtn8");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const box7 = document.querySelector(".box7");
const box8 = document.querySelector(".box8");
const box9 = document.querySelector(".box9");
const box10 = document.querySelector(".box10");
const box11 = document.querySelector(".box11");
const box12 = document.querySelector(".box12");
const box15 = document.querySelector(".box15");
const box16 = document.querySelector(".box16");
const box19 = document.querySelector(".box19");

const arr = ["NIGERIA", "USA", "GERMANY"];
const arr1 = ["FRANCE", "ITALY", "POLAND"];
const arr2 = ["GHANA", "PORTUGAL", "SWITZERLAND"];
const arr3 = ["CANADA", "NEPAL", "WAKEUP"];
const arr4 = ["JAPAN", "CROATIA", "GERMANY"];
const arr5 = ["KOREA", "UAE", "CAMEROUN"];
const arr6 = ["ARGENTINA", "TUNISIA", "NORWAY"];
const arr7 = ["COLUMBIA", "WALES", "SWEDEN"];

btn.addEventListener("click", () => {
  //  Math.random(arr)
  const result = Math.floor(Math.random() * 3);
  console.log(result);

  //generate countries
  box1.textContent = arr[result];
  prebtn1.textContent = box1.textContent
  box2.textContent = arr1[result];
  prebtn2.textContent = box2.textContent
  box3.textContent = arr2[result];
  prebtn3.textContent = box3.textContent

  box4.textContent = arr3[result];
  prebtn4.textContent = box4.textContent

  box5.textContent = arr4[result];
  prebtn5.textContent = box5.textContent

  box6.textContent = arr5[result];
  prebtn6.textContent = box6.textContent

  box7.textContent = arr6[result];
  prebtn7.textContent = box7.textContent

  box8.textContent = arr7[result];
  prebtn8.textContent = box8.textContent

});

btn1.addEventListener("click", () => {
  console.log("working");
  const result = Math.floor(Math.random() * 3);
  const box1Result = result;
  const result1 = Math.floor(Math.random() * 3);
  const box2Result = result1;
  if (box1Result > box2Result) {
    box9.textContent = box1.textContent;
    box1.style.border = "5px solid green";
    box2.style.border = "5px solid red";

    console.log("it is bypassing it");
  } else if (box2Result > box1Result) {
    box9.textContent = box2.textContent;
    box2.style.border = "5px solid green";
    box1.style.border = "5px solid red";
  } else {
    console.log("i can never get here");
  }

  const box3Result = result;
  const result3 = Math.floor(Math.random() * 3);
  const box4Result = result3;
  if (box3Result > box4Result) {
    box10.textContent = box3.textContent;
    box3.style.border = "5px solid green";
    box4.style.border = "5px solid red";
  } else if (box4Result > box3Result) {
    box10.textContent = box4.textContent;
    box2.style.border = "5px solid green";
    box1.style.border = "5px solid red";
  } else {
    console.log("i can never get here");
  }

  const box5Result = result;
  const result5 = Math.floor(Math.random() * 3);
  const box6Result = result5;
  if (box5Result > box6Result) {
    box11.textContent = box5.textContent;
    box5.style.border = "5px solid green";
    box6.style.border = "5px solid red";
  } else if (box6Result > box5Result) {
    box11.textContent = box6.textContent;
    box6.style.border = "5px solid green";
    box5.style.border = "5px solid red";
  } else {
    console.log("i can never get here");
  }

  const box7Result = result;
  const result7 = Math.floor(Math.random() * 3);
  const box8Result = result7;
  if (box7Result > box8Result) {
    box12.textContent = box7.textContent;
    box7.style.border = "5px solid green";
    box8.style.border = "5px solid red";
  } else if (box8Result > box7Result) {
    box12.textContent = box8.textContent;
    box7.style.border = "5px solid red";
    box8.style.border = "5px solid green";
  } else {
    console.log("i can never get here");
  }
});

btn2.addEventListener("click", () => {
  const result = Math.floor(Math.random() * 3);
  const box9result = result;
  const result2 = Math.floor(Math.random() * 3);
  const box10result = result2;
  if (box10result > box9result) {
    box15.textContent = box10.textContent;
    box10.style.border = "5px solid green";
    box9.style.border = "5px solid red";
  } else if (box9result > box10result) {
    box15.textContent = box9.textContent;
    box9.style.border = "5px solid green";
    box10.style.border = "5px solid red";
  }
  const result11 = Math.floor(Math.random() * 3);
  const box11Result = result11;
  const result12 = Math.floor(Math.random() * 3);
  const box12Result = result12;
  if (box11Result > box12Result) {
    box16.textContent = box11.textContent;
    box11.style.border = "5px solid green";
    box12.style.border = "5px solid red";
  } else if (box12Result > box11Result) {
    box16.textContent = box12.textContent;
    box12.style.border = "5px solid green";
    box11.style.border = "5px solid red";
  }
});

btn3.addEventListener("click", () => {
  const result = Math.floor(Math.random() * 3);
  const box15Result = result;
  const result1 = Math.floor(Math.random() * 3);
  const box16result = result1;
  if (box15Result > box16result) {
    box19.textContent = box15.textContent;
    box15.style.border = "5px solid green";
    box16.style.border = "5px solid red";
  } else if (box16result > box15Result) {
    box19.textContent = box16.textContent;
    box16.style.border = "5px solid green";
    box15.style.border = "5px solid red";
  } else {
    console.log("not working");
  }
  console.log("here");
  //  setInterval(aletme, 5000)
  // to make the pop up come after the winner is in the box
  setTimeout(() => {
    alert(`${box19.textContent} is the winner`);
  }, 2000);
});
