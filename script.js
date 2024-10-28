const expand = document.querySelector(".header-div2");
const menuIcon = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
  expand.classList.toggle("listContent");
  if (expand.classList.contains("listContent")) {
    menuIcon.src = "images/delete.png";
  } else {
    menuIcon.src = "images/menu.png";
  }
});


document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  const dishesParent = document.querySelector(".dishes_parent");
  const dishesItems = Array.from(dishesParent.querySelectorAll(".dishes_items"));
  console.log(dishesItems);
  const leftArrow = document.querySelector(".arrow1");
  const leftArrowImg = document.querySelector(".arrow1 > img");

  const rightArrow = document.querySelector(".arrow2");
  const rightArrowImg = document.querySelector(".arrow2 > img");


  function updateDisplayedDish(index) {
    // Hide all dishes and only display the current one
    dishesItems.forEach((item, i) => {
      item.style.display = i === index ? "block" : "none";
    });
  }

  function handleArrowClick(direction) {
    if (direction === "right") {
      currentIndex = (currentIndex + 1) % dishesItems.length;
      rightArrow.style.background = "#39DB4A"; // Apply green background

      rightArrowImg.src = 'images/right.png';
      rightArrowImg.style.transform = 'rotate(0deg)';
      leftArrowImg.src = 'images/left.png';
      leftArrowImg.style.transform = 'rotate(0deg)'; 
      leftArrow.style.background = "#EFEFEF";   // Reset left arrow

    } else if (direction === "left") {
      currentIndex = (currentIndex - 1 + dishesItems.length) % dishesItems.length;
      leftArrow.style.background = "#39DB4A"; 
      leftArrowImg.src = 'images/right.png';
      leftArrowImg.style.transform = 'rotate(-180deg)';
      rightArrowImg.src = 'images/left.png';
      rightArrowImg.style.transform = 'rotate(-180deg';
      rightArrow.style.background = "#EFEFEF"; // Reset right arrow

    }
    updateDisplayedDish(currentIndex);
  }

  function enableArrowNavigation() {
    updateDisplayedDish(currentIndex);
    rightArrow.addEventListener("click", rightArrowHandler);
    leftArrow.addEventListener("click", leftArrowHandler);
  }

  function disableArrowNavigation() {
    // Reset styles, remove event listeners, and show all dishes
    dishesItems.forEach((item) => (item.style.display = "block"));
    leftArrow.style.background = "#EFEFEF";
    rightArrow.style.background = "#39DB4A";

    rightArrow.removeEventListener("click", rightArrowHandler);
    leftArrow.removeEventListener("click", leftArrowHandler);
  }

  // Handlers to ensure they can be removed
  function rightArrowHandler() {
    handleArrowClick("right");
  }

  function leftArrowHandler() {
    handleArrowClick("left");
  }

  // Initial screen size check to set up arrow functionality if needed
  if (window.innerWidth < 844) {
    enableArrowNavigation();
  } else {
    disableArrowNavigation();
  }

  // Adjust arrow functionality based on screen resizing
  window.addEventListener("resize", () => {
    if (window.innerWidth < 844) {
      enableArrowNavigation();
    } else {
      disableArrowNavigation();
    }
  });
});
