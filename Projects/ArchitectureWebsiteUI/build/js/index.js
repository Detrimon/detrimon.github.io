function burgerOnClickHandler(e) {
  const burgerContainer = document.querySelector(".menu__btn");
  const headerElement = document.querySelector("#idHeader");
  const body = document.body;

  burgerContainer.classList.toggle("active");
  headerElement.classList.toggle("active");

  body.style.overflow = hidden;
}

function closeMenuHandler(e) {
  const burgerContainer = document.querySelector(".menu__btn");
  const headerElement = document.querySelector("#idHeader");
  const body = document.body;

  burgerContainer.classList.toggle("active");
  headerElement.classList.toggle("active");

  body.style.overflow = none;
}

function switchTheme(e) {
  const switcher = document.querySelector("#idThemeSwitcher");
  const primaryColor = getComputedStyle(document.body).getPropertyValue(
    "--color-primary"
  );
  const secondaryColor = getComputedStyle(document.body).getPropertyValue(
    "--color-secondary"
  );
  const primaryDelimiterColor = getComputedStyle(
    document.body
  ).getPropertyValue("--color-delimiter-primary");
  const secondaryDelimiterColor = getComputedStyle(
    document.body
  ).getPropertyValue("--color-delimiter-secondary");

  const primaryBgColor = getComputedStyle(document.body).getPropertyValue(
    "--color-bg-primary"
  );
  const secondaryBgColor = getComputedStyle(document.body).getPropertyValue(
    "--color-bg-secondary"
  );

  document.body.style.setProperty("--color-primary", secondaryColor);
  document.body.style.setProperty("--color-secondary", primaryColor);
  document.body.style.setProperty(
    "--color-delimiter-primary",
    secondaryDelimiterColor
  );
  document.body.style.setProperty(
    "--color-delimiter-secondary",
    primaryDelimiterColor
  );
  document.body.style.setProperty("--color-bg-primary", secondaryBgColor);
  document.body.style.setProperty("--color-bg-secondary", primaryBgColor);

  if (switcher.classList.contains("active")) {
    switcher.classList.remove("active");
  } else {
    switcher.classList.add("active");
  }
}
