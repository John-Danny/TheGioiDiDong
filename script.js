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

  transferImg(index);
});

leftbtn.addEventListener("click", () => {
  index -= 1;
  if (index < 0) {
    index = imgNumber.length - 1;
  }

  transferImg(index);
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
    transferImg(index);
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

  transferImg(index);
}

setInterval(imgAuto, 5000);

function transferImg(i) {
  document.querySelector(".slider-content-left-top").style.right =
    i * 100 + "%";
  removeActive();
  imgNumberLi[i].classList.add("active");

  index = i;
}

// ============== Slider product ===============
const rightbtnTwo = document.querySelector(".fa-chevron-right-two");
const leftbtnTwo = document.querySelector(".fa-chevron-left-two");
const imgNumberTwo = document.querySelectorAll(
  ".slider-product-one-content-items",
);
let indexTwo = 0;

rightbtnTwo.addEventListener("click", () => {
  indexTwo += 1;
  if (indexTwo > imgNumberTwo.length - 1) {
    indexTwo = 0;
  }

  transferProduct(indexTwo);
});

leftbtnTwo.addEventListener("click", () => {
  indexTwo -= 1;
  if (indexTwo < 0) {
    indexTwo = imgNumberTwo.length - 1;
  }

  transferProduct(indexTwo);
});

function transferProduct(i) {
  document.querySelector(
    ".slider-product-one-content-items-content",
  ).style.right = i * 100 + "%";
}
