// NAVIGATION
let burger = document.querySelector("#burger");
let line1 = document.querySelector("#first");
let line2 = document.querySelector("#middle");
let line3 = document.querySelector("#last");
let mobNav = document.querySelector("#mob-nav");

burger.addEventListener("click", function () {
  line1.classList.toggle("first");
  line2.classList.toggle("middle");
  line3.classList.toggle("last");

  mobNav.classList.toggle("nav-active");
});

let aboutDNav = document.querySelector("#about-d-nav");
let skillsDNav = document.querySelector("#skills-d-nav");
let projectDNav = document.querySelector("#project-d-nav");
let contactDNav = document.querySelector("#contact-d-nav");

let aboutMNav = document.querySelector("#about-m-nav");
let skillsMNav = document.querySelector("#skills-m-nav");
let projectMNav = document.querySelector("#project-m-nav");
let contactMNav = document.querySelector("#contact-m-nav");

let about = document.querySelector("#about");
let skills = document.querySelector("#skills");
let projects = document.querySelector("#projects");
let contact = document.querySelector("#contact");

aboutDNav.addEventListener("click", (e) => {
  smoothScroll(e);
});

skillsDNav.addEventListener("click", (e) => {
  smoothScroll(e);
});

projectDNav.addEventListener("click", (e) => {
  smoothScroll(e);
});

contactDNav.addEventListener("click", (e) => {
  smoothScroll(e);
});

function smoothScroll(e) {
  e.preventDefault();
  const href = e.target.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop - 150;

  console.log(offsetTop - 100);

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}

// MOBILE

aboutMNav.addEventListener("click", (e) => {
  smoothScrollM(e);
});

skillsMNav.addEventListener("click", (e) => {
  smoothScrollM(e);
});

projectMNav.addEventListener("click", (e) => {
  smoothScrollM(e);
});

contactMNav.addEventListener("click", (e) => {
  smoothScrollM(e);
});

function smoothScrollM(e) {
  e.preventDefault();
  const href = e.target.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop - 100;

  line1.classList.toggle("first");
  line2.classList.toggle("middle");
  line3.classList.toggle("last");

  mobNav.classList.toggle("nav-active");

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}

// TYPE

let type = document.querySelector("#type");
let text = `<div class="profile">
<p class="hello">Hi, i'm</p>
<p class="name">Nemanja Mijailovic</p>
<p class="status">Full-stack developer</p>
<div class="button">View portfolio</div>
</div>`;
let speed = 100;
let i = 0;

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

// Skills

let skillArea = document.querySelector("#skill-area");

fetch("assests/json/skill.json")
  .then((res) => res.json())
  .then((skillList) => {
    for (let i = 0; i < skillList.length; i++) {
      let percentage = 0;
      for (let j = 0; j < skillList[i].list.length; j++) {
        percentage += skillList[i].list[j].percentage;
      }
      percentage = Math.round(percentage / skillList[i].list.length);

      skillArea.innerHTML += `<div class="col-lg-6 mt-5 pr-5 pl-5 aa">
<div class="row bb">
  <div class="col-6 skill-tag text-left">${skillList[i].type}</div>
  <div class="col-6 percentage text-right">${percentage}%</div>
  <div  class="col-12 bar mt-2" value="${percentage}"><p id="percentage${
        i + 1
      }" class="bar-line"></p></div>
  <div id="skill-list${i}" class="skill-list"></div>
</div>
</div>`;

      document.querySelector(
        `#percentage${i + 1}`
      ).style.width = `${percentage}%`;

      for (let j = 0; j < skillList[i].list.length; j++) {
        document.querySelector(`#skill-list${i}`).innerHTML += `
    <p class="skill-ico">
    <img src="assests/image/skills/${skillList[i].list[
      j
    ].name.toLowerCase()}.png" alt="" />
    ${skillList[i].list[j].name}
    </p>
    `;
        k = 5;
      }
    }
  });

// Projects

let projectArea = document.querySelector("#project-area");

fetch("assests/json/projects.json")
  .then((res) => res.json())
  .then((projectList) => {
    function projectPrint() {
      projectArea.innerHTML = "";

      for (let i = projectList.length - 1; i >= 0; i--) {
        if (i % 2 === 0 && window.innerWidth > 992) {
          projectArea.innerHTML += ` <div class="project-card col-lg-12">
  <div class="project-text">
    <p class="category">${projectList[i].type}</p>
    <p class="name">${projectList[i].name}</p>
    <p class="text">${projectList[i].description}</p>
    <p id="tag${i}" class="tag"></p>
    <p class="button">View Details</p>
  </div>
  <div class="project-image"><img src="assests/image/projects/${projectList[i].image}.jpg" alt=""></div>
</div>
`;
        } else if (i % 2 === 1 || window.innerWidth <= 992) {
          projectArea.innerHTML += ` <div class="project-card col-lg-12">
    <div class="project-image"><img src="assests/image/projects/${projectList[i].image}.jpg" alt=""></div>
    <div class="project-text">
      <p class="category">${projectList[i].type}</p>
      <p class="name">${projectList[i].name}</p>
      <p class="text">${projectList[i].description}</p>
      <p id="tag${i}" class="tag"></p>
      <p class="button">View Details</p>
    </div>
  </div>`;
        }

        for (let j = 0; j < projectList[i].skills.length; j++) {
          document.querySelector(
            `#tag${i}`
          ).innerHTML += `<img class="mr-3" src="assests/image/skills/${projectList[i].skills[j]}.png" alt="">`;
        }
      }
    }
    projectPrint();

    window.addEventListener("resize", function () {
      projectPrint();
    });
  });
