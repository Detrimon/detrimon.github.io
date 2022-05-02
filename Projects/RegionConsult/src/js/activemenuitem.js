const aMenuAnchors = document.querySelectorAll("[data-menu_anchor]");
const nMenuAnchorsLength = aMenuAnchors.length;
const menuElement = document.getElementById("idMainMenu");

const nOffset = 220; // сдвиг вниз от начала секции, когда считать, что мы попали на новый раздел;
let scrollTimer;
let resizeTimer;

let aMenuItemsToAnchors = [];
makeAnchorsArray();

window.addEventListener("resize", makeAnchorsArray);

window.addEventListener("scroll", function (e) {
  if (scrollTimer) return;

  setTimeout(changeMenuState, 500);

  scrollTimer = setTimeout(function () {
    scrollTimer = undefined;
  }, 100);
});

function makeAnchorsArray() {
  if (resizeTimer) return;
  console.log("makeAnchorsArray");

  aMenuAnchors.forEach(function (item) {
    const itemId = item.id;
    for (let i = 0, ln = menuElement.children.length; i < ln; i++) {
      if (
        menuElement.children[i].firstElementChild.href.split("#")[1] === itemId
      ) {
        aMenuItemsToAnchors.push(menuElement.children[i].firstElementChild);
        break;
      }
    }
  });

  resizeTimer = setTimeout(function () {
    resizeTimer = undefined;
  }, 100);
}

function changeMenuState() {
  const currentScrollBottomPosition =
    document.documentElement.clientHeight + document.documentElement.scrollTop;

  aMenuAnchors.forEach(function (item, index) {
    const menuItemYPosition = item.offsetTop + nOffset;
    const menuNextItemYPosition =
      aMenuAnchors[index + 1] && aMenuAnchors[index + 1].offsetTop + nOffset;

    if (
      currentScrollBottomPosition > menuItemYPosition &&
      (currentScrollBottomPosition <= menuNextItemYPosition ||
        index === nMenuAnchorsLength - 1)
    ) {
      aMenuItemsToAnchors[index].classList.add("active");
    } else {
      aMenuItemsToAnchors[index].classList.remove("active");
    }
  });
}
