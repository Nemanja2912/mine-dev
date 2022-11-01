const firstBox = document.querySelector("#first");
const secondBox = document.querySelector("#second");
const thirdBox = document.querySelector("#third");
const forthBox = document.querySelector("#forth");

function setBoxSize() {
  firstBox.style.minHeight = `${window.innerHeight}px`;
}

setBoxSize();

const navFirst = document.querySelector(".nav-first");
const navSecond = document.querySelector(".nav-second");
const navThird = document.querySelector(".nav-third");
const navForth = document.querySelector(".nav-forth");

function setClipNav() {
  navFirst.style.height = `${firstBox.getBoundingClientRect().height}px`;
  navFirst.style.top = `${0}px`;

  navSecond.style.height = `${secondBox.getBoundingClientRect().height}px`;
  navSecond.style.top = `${firstBox.getBoundingClientRect().height}px`;

  navThird.style.height = `${thirdBox.getBoundingClientRect().height}px`;
  navThird.style.top = `${
    firstBox.getBoundingClientRect().height +
    secondBox.getBoundingClientRect().height
  }px`;

  navForth.style.height = `${forthBox.getBoundingClientRect().height}px`;
  navForth.style.top = `${
    firstBox.getBoundingClientRect().height +
    secondBox.getBoundingClientRect().height +
    thirdBox.getBoundingClientRect().height
  }px`;
}

setClipNav();

window.addEventListener("resize", () => {
  setClipNav();
});

// document.addEventListener("scroll", () => {
//   // reduceClipPath();
// });

// function reduceClipPath() {
//   let num =
//     (navFirst.getBoundingClientRect().bottom * 100) /
//     navFirst.getBoundingClientRect().height;

//   console.log(num);

//   navFirst.style.clipPath = `polygon(0 0, 100% 0, 100% ${num}%, 0% ${num}%)`;
// }
