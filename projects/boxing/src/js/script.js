// Navigation

let navigation = document.querySelector("nav");
let navImg = document.querySelector("#navImg");

document.addEventListener("scroll", function () {
  if (window.innerWidth < 1180) {
    navigation.style.backgroundColor = "#0a0a0a";

    return;
  }

  if (window.pageYOffset > 50) navigation.style.backgroundColor = "#0a0a0a";
  else navigation.style.backgroundColor = "transparent";
});

let mobBar = document.querySelector("#mob-bar");
let mobList = document.querySelector("#mob-list");
let sectionArea = document.querySelector("#section-area");
let list = document.querySelector("#list");
let open = false;

mobBar.addEventListener("click", function () {
  open = !open;

  if (open) {
    mobList.style.zIndex = "19";
  } else {
    setTimeout(() => {
      mobList.style.zIndex = "-1";
    }, 500);
  }

  mobBar.classList.toggle("open");
  sectionArea.classList.toggle("open");
  list.classList.toggle("open-list");
});

// // Play Video

let playButton = document.querySelector("#play-button");
let pauseButton = document.querySelector("#pause-button");
let video = document.querySelector("#video");

video.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    playButton.style.opacity = "0";
    pauseButton.style.opacity = "1";
  } else {
    video.pause();
    playButton.style.opacity = "1";
    pauseButton.style.opacity = "0";
  }
});

video.addEventListener("mouseover", function () {
  if (!video.paused) {
    pauseButton.style.opacity = "1";
  }
});

video.addEventListener("mouseleave", function () {
  if (!video.paused) {
    pauseButton.style.opacity = "0";
  }
});

// Trainers

let slider = document.querySelector("#slider");
let isDown = false;
let mousePos;
let scrollLeft;
let num = 0;

slider.addEventListener("mousedown", function (e) {
  isDown = true;
  mousePos = e.pageX;
  scrollLeft = slider.scrollLeft;

  slider.style.cursor = "grab";
});

slider.addEventListener("mouseup", function (e) {
  isDown = false;

  slider.style.cursor = "auto";
});

slider.addEventListener("mouseleave", function () {
  isDown = false;
  slider.style.cursor = "auto";
});

slider.addEventListener("mousemove", function (e) {
  if (isDown) slider.scrollLeft = scrollLeft + (mousePos - e.pageX);
});
