class Slider {
  initialization() {
    const imageContainer = document.querySelector("[data-slider='content']");
    const listContainer = document.querySelector("[data-slider='list']");

    Object.keys(listContainer.children).forEach((key, index) => {
      listContainer.children[key].dataset.index = index;
      imageContainer.children[key].dataset.index = index;
    });

    listContainer.addEventListener(
      "click",
      function (e) {
        e.preventDefault();
        const listItem = e.target.closest("li");

        const activeItem = listContainer.querySelector(
          "[data-centered='true']"
        );

        const activeIndex = (this.activeIndex = parseInt(
          activeItem.dataset.index
        ));
        const clickedIndex = (this.clickedIndex = parseInt(
          listItem.dataset.index
        ));

        if (clickedIndex === activeIndex) {
          return;
        }

        const imageItem = imageContainer.children[clickedIndex];

        const imageMargin = this._getLeftMargin(imageItem);
        const listMargin = this._getLeftMargin(listItem);

        const imageContainerMarginLeft = this._getLeftMargin(imageContainer);
        const listContainerMarginLeft = this._getLeftMargin(listContainer);

        const multiplier = Math.abs(clickedIndex - activeIndex);
        const listGaps = multiplier * listMargin;
        const imageGaps = multiplier * imageMargin * 2;

        const deltaImageContainerMargin = this._getDeltaMargin(imageContainer);
        const deltaListContainerMargin = this._getDeltaMargin(listContainer);

        const listAlignmentSize = this._getAlignmentSize(listContainer);

        if (clickedIndex > activeIndex) {
          imageContainer.style.marginLeft =
            imageContainerMarginLeft -
            (deltaImageContainerMargin + imageGaps) +
            "px";

          listContainer.style.marginLeft =
            listContainerMarginLeft -
            (deltaListContainerMargin + listGaps + listAlignmentSize) +
            "px";
        }

        if (clickedIndex < activeIndex) {
          imageContainer.style.marginLeft =
            imageContainerMarginLeft +
            (deltaImageContainerMargin + imageGaps) +
            "px";

          listContainer.style.marginLeft =
            listContainerMarginLeft +
            (deltaListContainerMargin + listGaps - listAlignmentSize) +
            "px";
        }

        delete activeItem.dataset.centered;
        listItem.dataset.centered = "true";
        activeItem.classList.remove("active");
        listItem.classList.add("active");
      }.bind(this)
    );
  }

  _getLeftMargin(element) {
    let leftMargin = getComputedStyle(element).getPropertyValue("margin-left");
    leftMargin = parseInt(leftMargin.slice(0, leftMargin.indexOf("px")));
    let rightMargin =
      getComputedStyle(element).getPropertyValue("margin-right");
    rightMargin = parseInt(rightMargin.slice(0, rightMargin.indexOf("px")));

    return leftMargin || rightMargin || 0;
  }

  _getAlignmentSize(element) {
    return (
      (element.children[this.clickedIndex].offsetWidth -
        element.children[this.activeIndex].offsetWidth) /
      2
    );
  }

  _getDeltaMargin(element) {
    let lowerIndex = this.clickedIndex;
    let higherIndex = this.activeIndex;
    if (this.activeIndex < this.clickedIndex) {
      lowerIndex = this.activeIndex;
      higherIndex = this.clickedIndex;
    }

    let deltaMargin = 0;

    for (let i = lowerIndex; i < higherIndex; i++) {
      let curElWidth = element.children[i].offsetWidth;
      deltaMargin += curElWidth;
    }
    return deltaMargin;
  }
}

export default new Slider();
