// Loader

let lineArr = Array.from(document.querySelectorAll(".load-line"));

setTimeout(() => {
  for (let i = 0; i < lineArr.length; i++) {
    lineArr[i].classList.add("open");
  }
}, 500);

// GREETING

console.log(
  `Hi! I'm glad that you like this website. It's made by www.mine-dev.com.`
);

// Variable

let windowHeight = window.innerHeight;

window.addEventListener("resize", function () {
  windowHeight = window.innerHeight;
});

window.addEventListener("orientationchange", function () {
  location.reload();
});

let blinkList = [
  "websites",
  "applications",
  "data-bases",
  "seo",
  "design",
  "branding",
];

let counter = 0;

let isBlinkActive = false;

let hoverList;

hoverList = Array.from(document.querySelectorAll(".cursor-hover"));

hoverList.map((x) =>
  x.addEventListener("mouseover", function () {
    cursorList.map((x) => {
      x.classList.add("cursor-puls");
    });
  })
);

hoverList.map((x) =>
  x.addEventListener("mouseleave", function () {
    cursorList.map((x) => {
      x.classList.remove("cursor-puls");
    });
  })
);

let hoverList2 = Array.from(document.querySelectorAll(".cursor-hover2"));

hoverList2.map((x) =>
  x.addEventListener("mouseover", function () {
    cursorList.map((x) => {
      x.classList.add("cursor-puls");
    });
  })
);

hoverList2.map((x) =>
  x.addEventListener("mouseleave", function () {
    cursorList.map((x) => {
      x.classList.remove("cursor-puls");
    });
  })
);

// ELEMENT VARIABLE

let scrollableDiv = document.querySelector(".scrollable-div");

const mainCursor = document.querySelector("#main-cursor");
const mainNav = document.querySelector("#main-nav");
const mainNavImage = document.querySelector("#main-nav-img");
let menuList = Array.from(document.querySelectorAll(".menu"));
let navigation = document.querySelector("#nav");
let imageBG = document.querySelector("#image-bg");
let mainWrapper = document.querySelector("#main-wrapper");
let main = document.querySelector("#main-screen");
let box = document.querySelector("#box");
let boxOverlay = document.querySelector("#box-overlay");
let aboutWrapper = document.querySelector("#about-wrapper");
let aboutScreen = document.querySelector("#screen2");
let extendedWhite = document.querySelector("#extended-white");
let textArea = document.querySelector("#text-area");
let wrapp = document.querySelector("#wrapp");
let project = document.querySelector("#project");
let projectTitle = document.querySelector("#project-title");
let projectArea = document.querySelector("#project-area");
let footer = document.querySelector("footer");

// Element set style

mainWrapper.style.height = `${windowHeight * 3.2}px`;
boxOverlay.style.height = `${windowHeight * 3.2}px`;
main.style.height = `${windowHeight}px`;
box.style.height = `${windowHeight}px`;

aboutWrapper.style.height = `${windowHeight * 2}px`;
aboutScreen.style.height = `${windowHeight}px`;

wrapp.style.height = `${windowHeight * 5}px`;
project.style.height = `${windowHeight}px`;

window.addEventListener("resize", function () {
  mainWrapper.style.height = `${windowHeight * 3.2}px`;
  boxOverlay.style.height = `${windowHeight * 3.2}px`;
  main.style.height = `${windowHeight}px`;
  box.style.height = `${windowHeight}px`;

  aboutWrapper.style.height = `${windowHeight * 2}px`;
  aboutScreen.style.height = `${windowHeight}px`;

  wrapp.style.height = `${windowHeight * 5}px`;
  project.style.height = `${windowHeight}px`;
});

// Scroll animation

scrollableDiv.addEventListener("scroll", function boxPath() {
  let pageTopPos = mainWrapper.getBoundingClientRect().y;

  let scrollSpeed =
    100 + (pageTopPos * 100) / (main.getBoundingClientRect().height * 2);

  box.style.clipPath = `polygon(${scrollSpeed}% 0, 100% 0, 100% 100%, ${scrollSpeed}% 100%)`;
});

scrollableDiv.addEventListener("scroll", function opacityText() {
  let activateTopPos = aboutWrapper.getBoundingClientRect().y + 100;

  let brakerBottomPos = aboutWrapper.getBoundingClientRect().y + windowHeight;

  let opacityValue = Math.abs((activateTopPos * 100) / brakerBottomPos / 100);

  if (activateTopPos <= 0) {
    aboutScreen.style.opacity = opacityValue;
  } else {
    aboutScreen.style.opacity = `0`;
  }
});

scrollableDiv.addEventListener("scroll", function extendedOpacity() {
  function blinker() {
    textArea.innerHTML = blinkList[counter];
    counter++;
    if (counter === blinkList.length) counter = 0;
    let stopBlinker = setTimeout(() => {
      blinker();
    }, 200);
    if (!isBlinkActive) {
      textArea.innerHTML = "";
      clearTimeout(stopBlinker);
    }
  }

  if (extendedWhite.getBoundingClientRect().y < 5) {
    if (isBlinkActive) return;
    isBlinkActive = true;
    blinker();
    extendedWhite.style.opacity = "1";
    imageBG.style.opacity = `0`;
    mainCursor.classList.add("cursor-black");
    mainNav.classList.add("black");
    mainNavImage.setAttribute("src", "/assest/logo/logo-b.png");
  } else {
    imageBG.style.opacity = `1`;
    extendedWhite.style.opacity = "0";
    isBlinkActive = false;
    mainCursor.classList.remove("cursor-black");
    mainNav.classList.remove("black");
    mainNavImage.setAttribute("src", "/assest/logo/logo.png");
  }
});

scrollableDiv.addEventListener("scroll", function circlePath() {
  if (wrapp.getBoundingClientRect().y < 0) {
    let moveSpeed =
      (wrapp.getBoundingClientRect().y * -200) /
      (wrapp.getBoundingClientRect().height - windowHeight);
    project.style.clipPath = `circle(
      ${moveSpeed}% at 50% 50%)`;

    projectTitle.style.right = `${-100 + moveSpeed}%`;
  } else {
    project.style.clipPath = `circle(0% at 50% 50%)`;
  }

  if (wrapp.getBoundingClientRect().bottom < 10) {
    mainNav.classList.remove("black");
    mainNavImage.setAttribute("src", "/assest/logo/logo.png");
  } else if (
    wrapp.getBoundingClientRect().bottom > 10 &&
    wrapp.getBoundingClientRect().y < 0
  ) {
    mainNav.classList.add("black");
    mainNavImage.setAttribute("src", "/assest/logo/logo-b.png");
  }
});

scrollableDiv.addEventListener("scroll", function showFooter() {
  if (footer.getBoundingClientRect().y <= 0) {
    footer.style.opacity = "1";
  } else if (footer.getBoundingClientRect().y > 0) {
    footer.style.opacity = "0";
  }
});

// CURSOR

let cursorList = Array.from(document.querySelectorAll(".cursor"));
let cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursorList.map((x) => {
    x.style.top = `${e.clientY - cursor.getBoundingClientRect().height / 2}px`;
    x.style.left = `${e.clientX - cursor.getBoundingClientRect().width / 2}px`;
  });
});

document.addEventListener("mouseleave", function () {
  cursorList.map((x) => {
    x.style.opacity = "0";
  });
});

document.addEventListener("mouseenter", function () {
  cursorList.map((x) => {
    x.style.opacity = "1";
  });
});

document.addEventListener("click", function () {
  cursorList.map((x) => {
    x.classList.add("cursor-click");
  });

  setTimeout(() => {
    cursorList.map((x) => {
      x.classList.remove("cursor-click");
    });
  }, 500);
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 123) e.preventDefault();
});

// Menu

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
