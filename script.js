const addressbtn = document.querySelector("#address-form");
const addressClose = document.querySelector("#close-address");

addressbtn.addEventListener("click", () => {
  document.querySelector(".address-form").style.display = "flex";
});

addressClose.addEventListener("click", () => {
  document.querySelector(".address-form").style.display = "none";
});
