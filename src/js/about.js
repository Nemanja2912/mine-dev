// Type
let type = document.querySelector("#type");
let text = `Every Client Brings
      <br> New Inspiration`;
let speed = 75;
let i = 0;

window.addEventListener("load", () => {
  function typping() {
    setTimeout(() => {
      if (i <= text.length) {
        if (text.charAt(i) == "<") {
          i = text.indexOf(">", i);
        } else {
          type.innerHTML = `${text.slice(0, i)}<span class="line"></span>`;
        }
        i += 1;
        typping();
      }
    }, speed);
  }

  typping();
});

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

// Sklls
let tabList = Array.from(document.querySelectorAll(".skill-tab"));

let skillArea = document.querySelector("#skill-area");

fetch("../../assest/json/skill.json")
  .then((res) => res.json())
  .then((skillList) => {
    for (let i = 0; i < skillList.length; i++) {
      skillArea.innerHTML += `<div id="body${i}" class='skills ${skillList[i].type} hide'>
        
        </div>`;

      for (let j = 0; j < skillList[i].list.length; j++) {
        document.querySelector(`#body${i}`).innerHTML += `
        <div class="box">
            <div class="box-cont">
              <img src="assest/image/skills/${skillList[i].list[
                j
              ].name.toLowerCase()}.png" alt="" />
              <p class="name">${skillList[i].list[j].name}</p>
            </div>
          </div>           
    `;
        k = 5;
      }
    }

    let tabsName = [];

    for (let i = 0; i < tabList.length; i++) {
      tabsName.push(`${tabList[i].textContent}`);

      if (tabList[i].textContent === "Frontend") {
        tabList[i].classList.add("active");

        document.querySelector(`.Frontend`).classList.remove("hide");
      }

      tabList[i].addEventListener("click", () => {
        for (let j = 0; j < tabList.length; j++) {
          tabList[j].classList.remove("active");
        }
        tabList[i].classList.add("active");

        document
          .querySelector(`.${tabList[i].textContent}`)
          .classList.remove("hide");

        for (let k = 0; k < tabsName.length; k++) {
          if (tabsName[k] === tabList[i].textContent) continue;

          document.querySelector(`.${tabsName[k]}`).classList.add("hide");
        }
      });
    }

    skillArea.style.height = `${
      document.querySelector(".Frontend").getBoundingClientRect().height
    }px`;
  });

let doDescription = [
  {
    name: "01. Website",
    description:
      "Web development is the building and maintenance of websites; it’s the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience. Website represent personal user as well as a business.",
  },
  {
    name: "02. Web & mobile app",
    description:
      "Web app is an application program that is stored on a remote server and delivered over the Internet through a browser interface. Web applications can be designed for a wide variety of uses and can be used by anyone.",
  },
  {
    name: "03. React app",
    description:
      "React is an open-source, front end, JavaScript library for building user interfaces or UI components. Design simple views for each state in your application. React can be used as a base in the development of single-page or mobile applications.",
  },
  {
    name: "04. SEO",
    description:
      "Search engines such as Google and Bing use bots to crawl pages on the web, going from site to site, collecting information about those pages and putting them in an index. Search ranking factors can be considered proxies for aspects of the user experience.",
  },
  {
    name: "05. UI / UX design",
    description:
      "A web designer is responsible for creating the design and layout of a website or web pages. It and can mean working on a brand new website or updating an already existing site. Their role is different to developers, but there can be crossover.",
  },
];

let title = document.querySelector("#title");
let description = document.querySelector("#description");
let descriptionTab = Array.from(document.querySelectorAll(".description-tab"));

title.innerHTML = doDescription[0].name;
description.innerHTML = doDescription[0].description;

if (window.innerWidth >= 900) descriptionTab[0].classList.add("active");

for (let i = 0; i < descriptionTab.length; i++) {
  descriptionTab[i].addEventListener("click", () => {
    if (window.innerWidth < 900) return;

    title.innerHTML = doDescription[i].name;
    description.innerHTML = doDescription[i].description;

    for (let j = 0; j < descriptionTab.length; j++) {
      descriptionTab[j].classList.remove("active");
    }
    descriptionTab[i].classList.add("active");
  });
}

let step01 = document.querySelector("#step01");
let stepBox1 = document.querySelector(".step-area01");
let isActive01 = false;

step01.addEventListener("click", () => {
  if (!isActive01) stepBox1.style.maxHeight = `${stepBox1.scrollHeight}px`;
  if (isActive01) stepBox1.style.maxHeight = `0px`;

  isActive01 = !isActive01;

  step01.classList.toggle("active");
});

//

let step02 = document.querySelector("#step02");
let stepBox2 = document.querySelector(".step-area02");
let isActive02 = false;

step02.addEventListener("click", () => {
  if (!isActive02) stepBox2.style.maxHeight = `${stepBox2.scrollHeight}px`;
  if (isActive02) stepBox2.style.maxHeight = `0px`;

  isActive02 = !isActive02;

  step02.classList.toggle("active");
});

//

let step03 = document.querySelector("#step03");
let stepBox3 = document.querySelector(".step-area03");
let isActive03 = false;

step03.addEventListener("click", () => {
  if (!isActive03) stepBox3.style.maxHeight = `${stepBox3.scrollHeight}px`;
  if (isActive03) stepBox3.style.maxHeight = `0px`;

  isActive03 = !isActive03;

  step03.classList.toggle("active");
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 123) e.preventDefault();
});
