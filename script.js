const addressbtn = document.querySelector("#address-form");
const addressClose = document.querySelector("#close-address");

addressbtn.addEventListener("click", () => {
  document.querySelector(".address-form").style.display = "flex";
});

addressClose.addEventListener("click", () => {
  document.querySelector(".address-form").style.display = "none";
});

// ========= Slider 1 ===================
const rightbtn = document.querySelector(".fa-chevron-right");
const leftbtn = document.querySelector(".fa-chevron-left");
const imgNumber = document.querySelectorAll(".slider-content-left-top img");
let index = 0;

rightbtn.addEventListener("click", () => {
  index += 1;
  if (index > imgNumber.length - 1) {
    index = 0;
  }

  document.querySelector(".slider-content-left-top").style.right =
    index * 100 + "%";
});

leftbtn.addEventListener("click", () => {
  index -= 1;
  if (index < 0) {
    index = imgNumber.length - 1;
  }

  document.querySelector(".slider-content-left-top").style.right =
    index * 100 + "%";
});

//  ================== Slider 2 =======================
const imgNumberLi = document.querySelectorAll(".slider-content-left-bottom li");
let lastActive = 0;

// Cách 1
// imgNumberLi.forEach((li, index) => {
//   li.addEventListener("click", () => {
//     document.querySelector(".slider-content-left-top").style.right =
//       index * 100 + "%";

//     if (lastActive != index) {
//       li.classList.add("active");
//       imgNumberLi[lastActive].classList.remove("active");
//       lastActive = index;
//     }
//   });
// });

// Cách 2
imgNumberLi.forEach((li, index) => {
  li.addEventListener("click", () => {
    document.querySelector(".slider-content-left-top").style.right =
      index * 100 + "%";

    removeActive();
    li.classList.add("active");
  });
});

function removeActive() {
  let liActive = document.querySelector(".active");
  liActive.classList.remove("active");
}

// ==================== Slider 3 ===================
function imgAuto() {
  index += 1;
  if (index > imgNumber.length - 1) {
    index = 0;
  }

  document.querySelector(".slider-content-left-top").style.right =
    index * 100 + "%";
  removeActive();
  imgNumberLi[index].classList.add("active");
}

setInterval(imgAuto, 5000);
