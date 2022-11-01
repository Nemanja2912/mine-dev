//   Nav

let navigation = document.querySelector("#nav");
let menuList = Array.from(document.querySelectorAll(".menu"));

menuList.map((x) =>
  x.addEventListener("click", function () {
    navigation.style.display = "flex";

    menuList.map((y) => y.classList.toggle("open"));

    setTimeout(() => {
      navigation.classList.toggle("nav-open");

      setTimeout(() => {
        if (navigation.classList.value !== "nav nav-open") {
          navigation.style.display = "none";
        }
      }, 1000);
    }, 0);
  })
);

let mainScreen = document.querySelector("#main-screen");

mainScreen.style.height = `${window.innerHeight}px`;

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 123) e.preventDefault();
});
