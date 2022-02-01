class Slider {
  constructor() {
    this.imageContainer = null;
    this.listContainer = null;
  }

  initialization() {
    // Прочесываем контент и ищем элементы с
    // data-slider = "content"
    // data-slider = "list"

    const imageContainer = document.querySelector("[data-slider='content']");
    const listContainer = document.querySelector("[data-slider='list']");

    Object.keys(listContainer.children).forEach((key, index) => {
      listContainer.children[key].dataset.index = index;
      imageContainer.children[key].dataset.index = index;
    });

    listContainer.addEventListener("click", function (e) {
      e.preventDefault();
      const listItem = e.target.closest("li");

      const activeItem = listContainer.querySelector("[data-centered='true']");

      const activeIndex = parseInt(activeItem.dataset.index);
      const clickedIndex = parseInt(listItem.dataset.index);

      let imageLeftMargin =
        getComputedStyle(listItem).getPropertyValue("margin-left");
      imageLeftMargin = parseInt(
        imageLeftMargin.slice(0, imageLeftMargin.indexOf("px"))
      );
      let imageRightMargin =
        getComputedStyle(listItem).getPropertyValue("margin-right");
      imageRightMargin = parseInt(
        imageRightMargin.slice(0, imageRightMargin.indexOf("px"))
      );

      let imageMargin = imageLeftMargin || imageRightMargin;

      let listLeftMargin =
        getComputedStyle(listItem).getPropertyValue("margin-left");
      listLeftMargin = parseInt(
        listLeftMargin.slice(0, listLeftMargin.indexOf("px"))
      );
      let listRightMargin =
        getComputedStyle(listItem).getPropertyValue("margin-right");
      listRightMargin = parseInt(
        listRightMargin.slice(0, listRightMargin.indexOf("px"))
      );

      let listMargin = listLeftMargin || listRightMargin;

      let currentImageLeftMargin =
        getComputedStyle(imageContainer).getPropertyValue("margin-left");
      currentImageLeftMargin = parseInt(
        currentImageLeftMargin.slice(0, currentImageLeftMargin.indexOf("px"))
      );

      let currentLeftMargin =
        getComputedStyle(listContainer).getPropertyValue("margin-left");
      currentLeftMargin = parseInt(
        currentLeftMargin.slice(0, currentLeftMargin.indexOf("px"))
      );

      if (listItem.dataset.index === activeItem.dataset.index) {
        return;
      }

      if (listItem.dataset.index > activeItem.dataset.index) {
        const multiplier = clickedIndex - activeIndex;
        console.log(activeIndex, clickedIndex);

        const extraDelta = Math.floor(
          (listContainer.children[clickedIndex].offsetWidth -
            listContainer.children[activeIndex].offsetWidth) /
            2
        );

        let deltaImageMargin = 0;
        for (let i = activeIndex; i < clickedIndex; i++) {
          let curImageElWidth = imageContainer.children[i].offsetWidth;
          deltaImageMargin += curImageElWidth;
        }

        deltaImageMargin += multiplier * imageMargin;

        console.log("-----------");
        console.log("deltaImageMargin: ", deltaImageMargin);
        console.log("currentImageLeftMargin: ", currentImageLeftMargin);
        console.log("-----------");
        imageContainer.style.marginLeft =
          -deltaImageMargin + currentImageLeftMargin + "px";

        let deltaMargin = 0;
        for (let i = activeIndex; i < clickedIndex; i++) {
          let curElWidth = listContainer.children[i].offsetWidth;
          deltaMargin += curElWidth;
        }

        deltaMargin += multiplier * listMargin;

        listContainer.style.marginLeft =
          -deltaMargin + currentLeftMargin - extraDelta + "px";
      }

      if (listItem.dataset.index < activeItem.dataset.index) {
        const multiplier = activeIndex - clickedIndex;

        const extraDelta =
          (listContainer.children[clickedIndex].offsetWidth -
            listContainer.children[activeIndex].offsetWidth) /
          2;

        let deltaImageMargin = 0;
        for (let i = clickedIndex + 1; i <= activeIndex; i++) {
          let curImageElWidth = imageContainer.children[i].offsetWidth;
          deltaImageMargin += curImageElWidth;
        }

        deltaImageMargin += multiplier * imageMargin;

        imageContainer.style.marginLeft =
          deltaImageMargin + currentImageLeftMargin + "px";

        let deltaMargin = 0;
        for (let i = clickedIndex + 1; i <= activeIndex; i++) {
          let curElWidth = listContainer.children[i].offsetWidth;
          deltaMargin += curElWidth;
        }

        deltaMargin += multiplier * listMargin;

        listContainer.style.marginLeft =
          deltaMargin + currentLeftMargin + extraDelta + "px";
      }

      delete activeItem.dataset.centered;
      listItem.dataset.centered = "true";
      activeItem.classList.remove("active");
      listItem.classList.add("active");
    });

    const aImages = Object.keys(imageContainer.children).map((key, index) => ({
      width: imageContainer.children[key].offsetWidth,
    }));

    const aListItems = Object.keys(listContainer.children).map(
      (key, index) => ({
        width: listContainer.children[key].offsetWidth,
      })
    );
    // imageContainer.children.

    this.aImages = aImages;
    this.aListItems = aListItems;

    console.log(this);

    console.dir(this.imageContainer);
  }
}

export default new Slider();
