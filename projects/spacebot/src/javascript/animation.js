//

window.addEventListener("load", () => {
  let n = document.querySelectorAll(".scroll-in:not(.scroll-in--scrolled)");

  Array.from(n).forEach((n) => {
    n.classList.add("scroll-in--scrolled");
  });
});

document.addEventListener("scroll", () => {
  var e = window.innerHeight,
    n = document.querySelectorAll(".scrolls-in:not(.scrolls-in--scrolled)");
  n.length &&
    Array.from(n).forEach((n) => {
      n.getBoundingClientRect().y + 100 < e &&
        n.classList.add("scrolls-in--scrolled");
    });
});

document.addEventListener("scroll", () => {
  var e = window.innerHeight,
    n = document.querySelectorAll(
      ".scrollsNew-in:not(.scrollsNew-in--scrolled)"
    );
  n.length &&
    Array.from(n).forEach((n) => {
      n.getBoundingClientRect().y + 100 < e &&
        n.classList.add("scrollsNew-in--scrolled");
    });
});

//

const typewriterList = Array.from(document.querySelectorAll(".typewriter"));

let isActive = [];

function writing(value) {
  if (isActive[value]) return;

  typewriterList[value].style.opacity = "1";

  isActive[value] = true;

  let num = 0;

  let text = typewriterList[value].innerText;

  var txt = text;

  var speed = 25;

  typewriterList[value].innerHTML = "";

  function typeWriter() {
    if (num < txt.length) {
      typewriterList[value].innerHTML += txt.charAt(num);
      num++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
}

document.addEventListener("scroll", () => {
  var e = window.innerHeight,
    n = document.querySelectorAll(".typewriter");

  n.length &&
    Array.from(n).forEach((n) => {
      n.getBoundingClientRect().y + 100 < e &&
        writing(typewriterList.indexOf(n));
    });
});

//

const typewriter = document.querySelector(".typewriter-n");

function writingNow() {
  typewriter.style.opacity = "1";

  let num = 0;

  let text = typewriter.innerText;

  var txt = text;

  var speed = 25;

  typewriter.innerHTML = "";

  function typeWriter() {
    if (num < txt.length) {
      typewriter.innerHTML += txt.charAt(num);
      num++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
}

window.addEventListener("load", () => {
  writingNow();
});

//

// const testBox = document.getElementById("text");
// const print = document.querySelector(".output");
// const startText = testBox.innerHTML;

// console.log("fontsize", print.style.fontSize);

// function wrappFunc() {
//   print.innerHTML = "";

//   function meassure(txt) {
//     var test = document.getElementById("text");
//     test.innerHTML = txt;
//     var width = test.clientWidth + 1;

//     // var fontSize = "30px";
//     // var family = "Gotham";
//     // test.style.fontSize = fontSize;
//     // test.style.fontFamily = family;

//     return width;
//   }

//   let width = meassure(startText);

//   const boxWidth = document.querySelector(".wrapper2").getBoundingClientRect()
//     .width;

//   let lineNum = Math.ceil(width / boxWidth);

//   let textArray = testBox.innerHTML.replace(/\s+/g, " ").trim().split(" ");

//   for (let i = 0; i < lineNum; i++) {
//     let txt = "";

//     for (let j = 0; j < textArray.length; j++) {
//       if (meassure(txt + textArray[j] + " ") < boxWidth) {
//         txt += textArray[j] + " ";
//       } else {
//         textArray.splice(0, j);
//         if (i + 1 == lineNum && textArray.length > 0) lineNum++;
//         break;
//       }
//     }
//     var finalTxt = txt;

//     const newDiv = document.createElement("div");

//     const newP = document.createElement("p");

//     newDiv.appendChild(newP);

//     const newContent = document.createTextNode(finalTxt);

//     newP.appendChild(newContent);

//     print.appendChild(newDiv);
//   }
// }

// wrappFunc();

// // // // // // // // // // // // // // // // // // // //

// const innerWidth = window.innerWidth;

// const testBox = document.getElementById("text");
// const print = document.querySelector(".output");
// const wrapBox = document.querySelector(".wrapper2");
// const startText = testBox.innerHTML;

// function wrappFunc() {
//   print.innerHTML = "";
//   function meassure(txt) {
//     var test = document.getElementById("text");
//     test.innerHTML = txt;
//     var width = test.clientWidth + 1;

//     return width;
//   }

//   let width = meassure(startText);

//   console.log("meassure", width);

//   const boxWidth = wrapBox.getBoundingClientRect().width;

//   console.log("boxWidth", boxWidth);

//   let lineNum = Math.ceil(width / boxWidth);

//   console.log(lineNum);

//   let textArray = testBox.innerHTML.replace(/\s+/g, " ").trim().split(" ");
//   for (let i = 0; i < lineNum; i++) {
//     let txt = "";
//     for (let j = 0; j < textArray.length; j++) {
//       if (meassure(txt + textArray[j] + " ") < boxWidth) {
//         txt += textArray[j] + " ";
//       } else {
//         textArray.splice(0, j);
//         if (i + 1 == lineNum && textArray.length > 0) lineNum++;
//         break;
//       }
//     }
//     var finalTxt = txt;
//     const newDiv = document.createElement("div");
//     const newP = document.createElement("p");

//     newP.classList.add("transition");
//     newP.classList.add("scrolls-in");

//     newDiv.appendChild(newP);
//     const newContent = document.createTextNode(finalTxt);
//     newP.appendChild(newContent);
//     print.appendChild(newDiv);
//   }
// }

// setTimeout(() => {
//   wrappFunc();
// }, 0);

// // window.addEventListener("resize", () => {
// //   if (window.innerWidth != innerWidth) wrappFunc();
// //   innerWidth = window.innerWidth;
// // });

// //

// const testBox3 = document.getElementById("text3");
// const print3 = document.querySelector(".output3");
// const wrapBox3 = document.querySelector(".wrapper3");
// const startText3 = testBox3.innerHTML;

// function wrappFunc3() {
//   print3.innerHTML = "";
//   function meassure(txt) {
//     var test = document.getElementById("text");
//     test.innerHTML = txt;
//     var width = test.clientWidth + 1;

//     return width;
//   }

//   let width = meassure(startText3);

//   console.log("meassure", width);

//   const boxWidth = wrapBox3.getBoundingClientRect().width;

//   console.log("boxWidth", boxWidth);

//   let lineNum = Math.ceil(width / boxWidth);

//   console.log(lineNum);

//   let textArray = testBox3.innerHTML.replace(/\s+/g, " ").trim().split(" ");
//   for (let i = 0; i < lineNum; i++) {
//     let txt = "";
//     for (let j = 0; j < textArray.length; j++) {
//       if (meassure(txt + textArray[j] + " ") < boxWidth) {
//         txt += textArray[j] + " ";
//       } else {
//         textArray.splice(0, j);
//         if (i + 1 == lineNum && textArray.length > 0) lineNum++;
//         break;
//       }
//     }
//     var finalTxt = txt;
//     const newDiv = document.createElement("div");
//     const newP = document.createElement("p");

//     newP.classList.add("transition");
//     newP.classList.add("scrolls-in");

//     newDiv.appendChild(newP);
//     const newContent = document.createTextNode(finalTxt);
//     newP.appendChild(newContent);
//     print3.appendChild(newDiv);
//   }
// }

// setTimeout(() => {
//   wrappFunc3();
// }, 0);
