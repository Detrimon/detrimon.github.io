const fold = document.getElementById("idFold");

fold.addEventListener("click", function (e) {
  e.preventDefault();

  const target = e.target;
  const toClickBlock = target.closest("[data-toClick]");

  if (toClickBlock) {
    const arrow = toClickBlock.querySelector(".competence__fold_title-arrow");
    arrow.classList.toggle("open");
    const textBlock = toClickBlock.parentNode.querySelector("ul");
    console.log(textBlock);
    textBlock.classList.toggle("open");
  }
});
