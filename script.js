const expand = document.querySelector(".header-div2");
const menuIcon = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
  expand.classList.toggle("listContent");
  if (expand.classList.contains("listContent")) {
    menuIcon.src = "/images/delete.png";
  } else {
    menuIcon.src = "/images/menu.png";
  }
});
