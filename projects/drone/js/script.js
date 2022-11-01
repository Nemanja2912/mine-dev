let nav = document.querySelector("#nav");
let circle = document.querySelector("#circle");
let navButtons = document.querySelectorAll(".nav-btn");

for (let i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener("click", function () {
    circle.classList.remove("open");
    nav.style.fill = isActive ? "#212121" : "#fff";
    isActive = !isActive;
  });
}

let isActive = false;

nav.addEventListener("click", function () {
  circle.classList.toggle("open");
  nav.style.fill = isActive ? "#212121" : "#fff";
  isActive = !isActive;
});

///////

!(function () {
  "use strict";
  function r() {
    function e() {
      var r = {
          width: u.width / u.naturalWidth,
          height: u.height / u.naturalHeight,
        },
        a = {
          width: parseInt(
            window.getComputedStyle(u, null).getPropertyValue("padding-left"),
            10
          ),
          height: parseInt(
            window.getComputedStyle(u, null).getPropertyValue("padding-top"),
            10
          ),
        };
      i.forEach(function (e, t) {
        var n = 0;
        o[t].coords = e
          .split(",")
          .map(function (e) {
            var t = 1 == (n = 1 - n) ? "width" : "height";
            return a[t] + Math.floor(Number(e) * r[t]);
          })
          .join(",");
      });
    }
    function t(e) {
      return e.coords.replace(/ *, */g, ",").replace(/ +/g, ",");
    }
    function n() {
      clearTimeout(d), (d = setTimeout(e, 250));
    }
    function r(e) {
      return document.querySelector('img[usemap="' + e + '"]');
    }
    var a = this,
      o = null,
      i = null,
      u = null,
      d = null;
    "function" != typeof a._resize
      ? ((o = a.getElementsByTagName("area")),
        (i = Array.prototype.map.call(o, t)),
        (u = r("#" + a.name) || r(a.name)),
        (a._resize = e),
        u.addEventListener("load", e, !1),
        window.addEventListener("focus", e, !1),
        window.addEventListener("resize", n, !1),
        window.addEventListener("readystatechange", e, !1),
        document.addEventListener("fullscreenchange", e, !1),
        (u.width === u.naturalWidth && u.height === u.naturalHeight) || e())
      : a._resize();
  }
  function e() {
    function t(e) {
      e &&
        (!(function (e) {
          if (!e.tagName)
            throw new TypeError("Object is not a valid DOM element");
          if ("MAP" !== e.tagName.toUpperCase())
            throw new TypeError(
              "Expected <MAP> tag, found <" + e.tagName + ">."
            );
        })(e),
        r.call(e),
        n.push(e));
    }
    var n;
    return function (e) {
      switch (((n = []), typeof e)) {
        case "undefined":
        case "string":
          Array.prototype.forEach.call(
            document.querySelectorAll(e || "map"),
            t
          );
          break;
        case "object":
          t(e);
          break;
        default:
          throw new TypeError("Unexpected data type (" + typeof e + ").");
      }
      return n;
    };
  }
  "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e())
    : (window.imageMapResize = e()),
    "jQuery" in window &&
      (window.jQuery.fn.imageMapResize = function () {
        return this.filter("map").each(r).end();
      });
})();
imageMapResize();
//# sourceMappingURL=imageMapResizer.map

// ///////

let specBox = document.querySelector("#spec-box");
let click1 = document.querySelector("#click1");
let click2 = document.querySelector("#click2");
let click3 = document.querySelector("#click3");
let click4 = document.querySelector("#click4");
let click5 = document.querySelector("#click5");
let click6 = document.querySelector("#click6");

let mobAct = document.querySelector("#mobile-act");

let currentID;
let next = document.querySelector("#next");
let close = document.querySelector("#close");

function openBox(target) {
  let coords = target.getAttribute("coords").split(",");
  currentID = target.getAttribute("id").split("click")[1];

  if (window.innerWidth > 992) {
    specBox.style.left = `${
      coords[0] - specBox.getBoundingClientRect().width / 2
    }px`;
  } else {
    if (currentID == 1 || currentID == 4) {
      specBox.style.left = `${
        coords[0] - specBox.getBoundingClientRect().width / 2
      }px`;
    } else if (currentID == 2 || currentID == 3) {
      specBox.style.left = `${coords[0]}px`;
    } else {
      specBox.style.left = `${
        coords[0] - specBox.getBoundingClientRect().width
      }px`;
    }
  }

  specBox.style.top = `${
    coords[1] - specBox.getBoundingClientRect().height - 30
  }px`;
  specBox.classList.add("open-box");
}

next.addEventListener("click", function () {
  let boxID;
  currentID == 6
    ? (boxID = click1)
    : (boxID = window[`click${Number(currentID) + 1}`]);
  openBox(boxID);
});

close.addEventListener("click", function () {
  specBox.classList.remove("open-box");
  setTimeout(() => {
    specBox.style.top = "";
    specBox.style.left = "";
  }, 500);
});

mobAct.addEventListener("click", () => openBox(click1));

click1.addEventListener("click", () => openBox(click1));
click2.addEventListener("click", () => openBox(click2));
click3.addEventListener("click", () => openBox(click3));
click4.addEventListener("click", () => openBox(click4));
click5.addEventListener("click", () => openBox(click5));
click6.addEventListener("click", () => openBox(click6));

window.addEventListener("resize", function () {
  let boxID = window[`click${Number(currentID)}`];
  if (!boxID) return;
  openBox(boxID);
});
