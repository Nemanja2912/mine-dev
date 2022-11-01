// Fetch projcets

const videoTab = document.querySelector("#video");
const animationTab = document.querySelector("#animation");
const recordingTab = document.querySelector("#recording");
const gallery = document.querySelector("#gallery");
const pagination = document.querySelector("#pagination");
const modalBox = document.querySelector("#modal-content");

let publicNumber;

function showRecordings(link) {
  modalBox.innerHTML = `
   <iframe class="recordings" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=${link}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
  `;
}

let videoWidth;

fetch("assests/json/work.json")
  .then((response) => response.json())
  .then((data) => {
    function printRecordings(type, num = 0) {
      gallery.innerHTML = "";
      pagination.innerHTML = "";

      publicNumber = num;

      let breakNum = window.innerWidth > 992 ? 8 : 9;

      filterList = data.workList.filter((filter) => filter.type === type);

      let paginationCount = Math.ceil(filterList.length / breakNum);

      filterList = filterList.splice(0 + Number(num) * breakNum, breakNum);

      let grid = document.createElement("div");
      grid.classList.add("grid");
      gallery.appendChild(grid);

      window.innerWidth > 992
        ? (grid.style.gridAutoRows = `${videoWidth / 2}px`)
        : (grid.style.gridAutoRows = `${videoWidth / 3}px`);

      for (let i = 0; i < filterList.length; i++) {
        document.querySelector(".grid").innerHTML += `

            <div onClick='showRecordings("${filterList[i].link}")' class="image-box" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
              <img src="assests/projects/${filterList[i].image}" alt="" />
            </div>

          `;
      }

      for (let i = 0; i < paginationCount; i++) {
        let counter = i + 1;

        if (i === 0) {
          pagination.innerHTML = `<p number="${
            Number(publicNumber) === 0 ? 0 : Number(publicNumber) - 1
          }" type="${type}" id="prev" class="buttonPagination"><</p>`;
        }

        pagination.innerHTML += `<p number="${i}" type="${type}" class="buttonPagination ${
          counter === Number(num) + 1 ? "active" : ""
        }">${counter < 10 ? "0" + counter : counter}</p>`;

        if (i === paginationCount - 1) {
          pagination.innerHTML += `<p number="${
            Number(publicNumber) === Number(paginationCount) - 1
              ? Number(paginationCount) - 1
              : Number(publicNumber) + 1
          }" type="${type}" id="next" class="buttonPagination">></p>`;
        }
      }

      let buttonPaginationList = Array.from(
        document.querySelectorAll(`.buttonPagination`)
      );

      for (let i = 0; i < buttonPaginationList.length; i++) {
        buttonPaginationList[i].addEventListener("click", () => {
          if (publicNumber === buttonPaginationList[i].getAttribute("number")) {
            return;
          }

          for (let j = 0; j < buttonPaginationList.length; j++) {
            buttonPaginationList[j].classList.remove("active");
          }

          buttonPaginationList[i].classList.add("active");

          printRecordings(
            buttonPaginationList[i].getAttribute("type"),
            buttonPaginationList[i].getAttribute("number")
          );
        });
      }
    }

    function oneProject(type) {
      gallery.innerHTML = "";
      pagination.innerHTML = "";

      let filterList = data.workList.filter((filter) => filter.type === type);

      if (type === "video") {
        gallery.innerHTML = `
        <div class="change-width">
        <div class="video-wraper">
         <iframe
    src="${filterList[0].link}">
    </iframe>
    </div>
    </div>`;
      }

      if (type === "animation") {
        gallery.innerHTML = `
        <div class="change-width">
          <div class="video-wraper">
         <iframe
    src="${filterList[0].link}">
    </iframe>
    </div></div>`;
      }
    }

    // printProject("video");

    oneProject("video");

    videoWidth = document.querySelector(".change-width").getBoundingClientRect()
      .height;

    window.addEventListener("resize", () => {
      videoWidth = document
        .querySelector(".change-width")
        .getBoundingClientRect().height;
    });

    videoTab.addEventListener("click", () => {
      videoTab.classList.add("active");
      animationTab.classList.remove("active");
      recordingTab.classList.remove("active");

      oneProject("video");
    });

    animationTab.addEventListener("click", () => {
      animationTab.classList.add("active");
      videoTab.classList.remove("active");
      recordingTab.classList.remove("active");

      oneProject("animation");
    });

    recordingTab.addEventListener("click", () => {
      recordingTab.classList.add("active");
      animationTab.classList.remove("active");
      videoTab.classList.remove("active");

      printRecordings("recording");
    });
  });

document
  .querySelector("#staticBackdrop")
  .addEventListener("hidden.bs.modal", function (event) {
    modalBox.innerHTML = ``;
  });
