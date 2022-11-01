let navigation = document.querySelector("nav");
let aboutSection = document.querySelector(".about");
let footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  if (aboutSection.getBoundingClientRect().top <= 0)
    navigation.style.top = "-100px";
  else navigation.style.top = "0";

  // if (
  //   footer.getBoundingClientRect().top - window.innerHeight <= 0 &&
  //   window.innerWidth > 750
  // ) {
  //   footer.style.transform = `translateY(${
  //     (footer.getBoundingClientRect().top - window.innerHeight) / 2
  //   }px)`;
  // }
});

document.addEventListener("scroll", () => {
  var e = window.innerHeight,
    n = document.querySelectorAll(".scroll-in:not(.scroll-in--scrolled)");
  n.length &&
    Array.from(n).forEach((n) => {
      n.getBoundingClientRect().y + 100 < e &&
        n.classList.add("scroll-in--scrolled");
    });
});

window.addEventListener("load", () => {
  let n = document.querySelectorAll(".load-in:not(.load-in--loaded)");

  Array.from(n).forEach((n) => {
    n.classList.add("load-in--loaded");
  });
});

// IMAGE MOVE

let certArr = [
  // {
  //   box: document.querySelector("#name1"),
  //   img: document.querySelector("#img1"),
  // },
  {
    box: document.querySelector("#name2"),
    img: document.querySelector("#img2"),
  },
  {
    box: document.querySelector("#name3"),
    img: document.querySelector("#img3"),
  },
  {
    box: document.querySelector("#name4"),
    img: document.querySelector("#img4"),
  },
  {
    box: document.querySelector("#name5"),
    img: document.querySelector("#img5"),
  },
  {
    box: document.querySelector("#name6"),
    img: document.querySelector("#img6"),
  },
];

let isActive = false;

for (let i = 0; i < certArr.length; i++) {
  certArr[i].box.addEventListener("mouseover", function () {
    isActive = true;
  });

  certArr[i].box.addEventListener("mouseout", function () {
    isActive = false;
  });
}

window.addEventListener("mousemove", function (e) {
  if (!isActive) return;

  for (let i = 0; i < certArr.length; i++) {
    certArr[i].img.style.top = `${e.pageY}px`;
    certArr[i].img.style.left = `${e.pageX}px`;
  }

  console.log(img.style.transform);
});

let submit = document.querySelector("#submit");
let input = document.querySelector("#email");
let errorText = document.querySelector(".err-txt");
let confirmText = document.querySelector(".confirm-txt");

submit.addEventListener("click", (e) => {
  let value = input.value;

  if (!/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/.test(value)) {
    input.classList.add("error");
    errorText.style.display = "flex";
    return e.preventDefault();
  }

  errorText.style.display = "none";

  input.classList.remove("error");
  submit.classList.add("send");
  input.classList.add("disable");

  confirmText.style.display = "flex";
  submit.innerHTML = `EMAIL SENT <span class="check">✓</span>`;

  setTimeout(() => {
    input.placeholder = "";
    input.value = "";
    input.disabled = true;
    submit.disabled = true;
  }, 1000);
});
