function dateFormat() {
  const aDateElements = document.querySelectorAll("._to-format");
  aDateElements.forEach((elem) => {
    elem.textContent = Intl.DateTimeFormat("ru-RU").format(
      parseInt(elem.textContent, 10)
    );
  });
}

dateFormat();
