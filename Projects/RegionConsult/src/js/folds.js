const foldElement = document.getElementById("idFold");

foldElement.addEventListener("click", function (e) {
  e.preventDefault();
  const toClickBlock = e.target.closest("[data-toClick]");

  if (toClickBlock) {
    const arrowElement = toClickBlock.querySelector(
      ".competence__fold_title-arrow"
    );
    const textBlockElement = toClickBlock.parentNode.querySelector("ul");

    arrowElement.classList.toggle("open");
    textBlockElement.classList.toggle("open");
  }
});
