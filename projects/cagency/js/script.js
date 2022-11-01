// Navigation
let navigation = document.querySelector("nav");
let burgerBar = document.querySelector("#burger-bar");
let burger1 = document.querySelector("#burger1");
let burger2 = document.querySelector("#burger2");
let burger3 = document.querySelector("#burger3");
let cross1 = document.querySelector("#cross1");
let cross2 = document.querySelector("#cross2");

let mobBar = document.querySelector("#mob-bar");

let isActive = false;

burgerBar.addEventListener("click", navigationDrop);

function navigationDrop() {
  if (isActive) {
    cross1.classList.toggle("active4");
    cross2.classList.toggle("active5");

    setTimeout(function () {
      burger1.classList.toggle("display");
      burger2.classList.toggle("display");
      burger3.classList.toggle("display");
      cross1.classList.toggle("display");
      cross2.classList.toggle("display");

      setTimeout(function () {
        burger1.classList.toggle("active1");
        burger2.classList.toggle("active2");
        burger3.classList.toggle("active3");
      }, 100);
    }, 1000);

    mobBar.classList.toggle("bar-active");
    isActive = false;
  } else {
    burger1.classList.toggle("active1");
    burger2.classList.toggle("active2");
    burger3.classList.toggle("active3");

    setTimeout(function () {
      burger1.classList.toggle("display");
      burger2.classList.toggle("display");
      burger3.classList.toggle("display");
      cross1.classList.toggle("display");
      cross2.classList.toggle("display");

      setTimeout(function () {
        cross1.classList.toggle("active4");
        cross2.classList.toggle("active5");
      }, 100);
    }, 1500);

    mobBar.classList.toggle("bar-active");
    isActive = true;
  }
}

// Play Video

let playButton = document.querySelector("#play-button");
let video = document.querySelector("#video");

playButton.addEventListener("click", function () {
  if (video.paused == true) {
    video.play();
    playButton.style.opacity = "0";
  } else {
    video.pause();
    playButton.style.opacity = "1";
  }
});

// Landmark

let landmarkImage = document.querySelector("#landmark-image");
let landmarkName = document.querySelector("#landmark-name");
let landmarkDesc = document.querySelector("#landmark-desc");
let landmarkBoxes = document.querySelectorAll(".landmark-box");
landmarkBoxes = [...landmarkBoxes];
let landmarkText = document.querySelector(".landmark-text");
let preview = document.querySelector("#preview");
let isDown = false;
let landmarkNumber = document.querySelector("#number");
let arrowLeft = document.querySelector("#arrow-left");
let arrowRight = document.querySelector("#arrow-right");
let mousePos;
let scrollLeft;
let num = 0;

landmarkImage.style.backgroundImage = landmarkBoxes[0].getAttribute(
  "landImage"
);
landmarkName.innerHTML = landmarkBoxes[0].getAttribute("landName");

if (window.innerWidth > 992) {
  landmarkDesc.innerHTML = `${landmarkBoxes[0]
    .getAttribute("landDesc")
    .slice(0, 400)}<span class="see-more">... see more</span>`;
} else {
  landmarkDesc.innerHTML = `${landmarkBoxes[0]
    .getAttribute("landDesc")
    .slice(0, 200)}<span class="see-more">... see more</span>`;
}
landmarkNumber.innerHTML = "01";

for (let i = 0; i < landmarkBoxes.length; i++) {
  landmarkBoxes[i].addEventListener("click", (e) => {
    landmarkChange(e.target);
  });
}

arrowRight.addEventListener("click", () => {
  if (num == landmarkBoxes.length - 1) {
    num = 0;
    landmarkChange(landmarkBoxes[num]);
  } else {
    landmarkChange(landmarkBoxes[num + 1]);
    num += 1;
  }
});

arrowLeft.addEventListener("click", () => {
  if (num == 0) {
    num = landmarkBoxes.length - 1;
    landmarkChange(landmarkBoxes[num]);
  } else {
    landmarkChange(landmarkBoxes[num - 1]);
    num -= 1;
  }
});

function landmarkChange(e) {
  landmarkImage.style.backgroundImage = e.getAttribute("landImage");
  landmarkName.innerHTML = e.getAttribute("landName");

  if (window.innerWidth > 992) {
    landmarkDesc.innerHTML = `${e
      .getAttribute("landDesc")
      .slice(0, 400)}<span class="see-more">... see more</span>`;
  } else {
    landmarkDesc.innerHTML = `${e
      .getAttribute("landDesc")
      .slice(0, 125)}<span class="see-more">... see more</span>`;
  }
  landmarkNumber.innerHTML =
    landmarkBoxes.indexOf(e) + 1 < 10
      ? `0${landmarkBoxes.indexOf(e) + 1}`
      : landmarkBoxes.indexOf(e) + 1;
}

preview.addEventListener("mousedown", function (e) {
  isDown = true;
  mousePos = e.pageX;
  scrollLeft = preview.scrollLeft;
});

preview.addEventListener("mouseup", function (e) {
  isDown = false;
});

preview.addEventListener("mouseleave", function () {
  isDown = false;
});

preview.addEventListener("mousemove", function (e) {
  if (isDown) {
    preview.scrollLeft = scrollLeft + (mousePos - e.pageX);
  }
});

// SORT

let sort = document.querySelector("#sort");
let sortDrop = document.querySelector("#sort-drop");
let active = false;
let discrict = document.querySelector("#discrict");
let key = "";
let apartmentArea = document.querySelector("#apartment-area");
let counter = 0;
let max = 0;
let priceAsc = document.querySelector("#price-asc");
let priceDesc = document.querySelector("#price-desc");
let starsAsc = document.querySelector("#stars-asc");
let starsDesc = document.querySelector("#stars-desc");
let sorting = "starsDesc";

var request = new XMLHttpRequest();
request.open("GET", "assests/json/apartment.json", false);
request.send(null);
var apartmentList = JSON.parse(request.responseText);

apartmentList.sort((x, y) => y.stars - x.stars);

for (let i = 0; i < 6; i++) {
  counter = i + 1;
  apartmentCard(i);
  max = i;
}
if (counter < apartmentList.length) {
  apartmentArea.innerHTML += `<p id="load" class="load">Load more</p>`;
  max += 6;
}

let loadBtn = document.querySelector("#load");

loadBtn.addEventListener("click", (e) => {
  loader(e);
});

function loader() {
  apartmentArea.removeChild(loadBtn);
  for (let i = counter; i <= max; i++) {
    apartmentCard(i);
  }
  counter += 6;
  max += 6;

  if (counter < apartmentList.length) {
    apartmentArea.innerHTML += `<p id="load" class="load">Load more</p>`;

    loadBtn = document.querySelector("#load");

    loadBtn.addEventListener("click", (e) => {
      loader(e);
    });
  }
}
// PRICE ASCENDING
priceAsc.addEventListener("click", function () {
  apartmentArea.innerHTML = "";
  apartmentList.sort((x, y) => x.price - y.price);

  counter = 0;

  for (let i = 0; i < 6; i++) {
    counter = i + 1;
    apartmentCard(i);
    max = i;
  }
  max += 6;

  if (counter < apartmentList.length) {
    apartmentArea.innerHTML += `<p id="load" class="load">Load more</p>`;

    loadBtn = document.querySelector("#load");

    loadBtn.addEventListener("click", (e) => {
      loader(e);
    });
  }
});

// PRICE DESCENDING

priceDesc.addEventListener("click", function () {
  apartmentArea.innerHTML = "";
  apartmentList.sort((x, y) => y.price - x.price);

  counter = 0;

  for (let i = 0; i < 6; i++) {
    counter = i + 1;
    apartmentCard(i);
    max = i;
  }
  max += 6;

  if (counter < apartmentList.length) {
    apartmentArea.innerHTML += `<p id="load" class="load">Load more</p>`;

    loadBtn = document.querySelector("#load");

    loadBtn.addEventListener("click", (e) => {
      loader(e);
    });
  }
});

// STARS ASCENDING

starsAsc.addEventListener("click", function () {
  apartmentArea.innerHTML = "";
  apartmentList.sort((x, y) => x.stars - y.stars);

  counter = 0;

  for (let i = 0; i < 6; i++) {
    counter = i + 1;
    apartmentCard(i);
    max = i;
  }
  max += 6;

  if (counter < apartmentList.length) {
    apartmentArea.innerHTML += `<p id="load" class="load">Load more</p>`;

    loadBtn = document.querySelector("#load");

    loadBtn.addEventListener("click", (e) => {
      loader(e);
    });
  }
});

// STARS DESCENDING

starsDesc.addEventListener("click", function () {
  apartmentArea.innerHTML = "";
  apartmentList.sort((x, y) => y.stars - x.stars);

  counter = 0;

  for (let i = 0; i < 6; i++) {
    counter = i + 1;
    apartmentCard(i);
    max = i;
  }
  max += 6;

  if (counter < apartmentList.length) {
    apartmentArea.innerHTML += `<p id="load" class="load">Load more</p>`;

    loadBtn = document.querySelector("#load");

    loadBtn.addEventListener("click", (e) => {
      loader(e);
    });
  }
});

sort.addEventListener("click", function () {
  if (!active) {
    sortDrop.style.display = "block";
    active = true;
  } else {
    sortDrop.style.display = "none";
    active = false;
  }
});

function apartmentCard(i) {
  apartmentArea.innerHTML += `
  <div class="col-xxl-6 card-margin">
            <div class="rent-card">
              <div class="row d-flex">
              <div class="col-md-6 image-wrap">
                <div id="apart-image${apartmentList[i].id}" class="apart-img"></div>
                </div>
                <div class="col-md-6 pt-4 pb-3 card-text">
                <div>
                <h4>${apartmentList[i].name}</h4>
                  <p>${apartmentList[i].place}</p>
                  <p id="star${apartmentList[i].id}">
                    
                  </p>
                  <p><i class="fas fa-bed mr-2"></i> ${apartmentList[i].people} bedroom</p>
                  <p class="desc">
                    ${apartmentList[i].description}
                  </p>
                  </div>
                  <p class="button">$${apartmentList[i].price} per night</p>
                </div>
              </div>
            </div>
          </div>
  `;

  document.querySelector(
    `#apart-image${apartmentList[i].id}`
  ).style.backgroundImage = `url('assests/image/apartments/apartment${apartmentList[i].id}.jpg')`;

  for (let s = 1; s <= 5; s++) {
    if (s <= apartmentList[i].stars) {
      document.querySelector(
        `#star${apartmentList[i].id}`
      ).innerHTML += `<i class="fas fa-star"></i> `;
    } else {
      document.querySelector(
        `#star${apartmentList[i].id}`
      ).innerHTML += `<i class="far fa-star"></i> `;
    }
  }
}

discrict.addEventListener("keyup", function (e) {
  key = e.target.value.toLowerCase();

  if (key.length == 0) {
    apartmentArea.innerHTML = "";
    for (let i = 0; i < 6; i++) {
      apartmentCard(i);
    }
    if (counter < apartmentList.length) {
      apartmentArea.innerHTML += `<p id="load" class="load">Load more</p>`;

      loadBtn = document.querySelector("#load");

      loadBtn.addEventListener("click", (e) => {
        loader(e);
      });
    }
  } else {
    apartmentArea.innerHTML = "";
    for (let i = 0; i < apartmentList.length; i++) {
      if (apartmentList[i].place.toLowerCase().indexOf(key) > -1) {
        apartmentCard(i);
      }
    }
  }
});
