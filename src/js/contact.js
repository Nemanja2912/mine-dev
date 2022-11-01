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

document.querySelector(".contact").style.height = window.innerHeight + "px";

window.addEventListener("resize", function () {
  document.querySelector(".contact").style.height = window.innerHeight + "px";
});
