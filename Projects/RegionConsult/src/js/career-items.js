const careerItemsElement = document.getElementById("idCareerItems");

import { vacancyPath } from "./config";

var req = new XMLHttpRequest();
req.responseType = "json";
req.open("GET", vacancyPath, true);
req.onload = function () {
  var jsonResponse = req.response;

  jsonResponse.forEach(function (item) {
    const li_el = document.createElement("li");
    const a_el = document.createElement("a");
    a_el.setAttribute("target", "__blank");
    a_el.setAttribute("href", item.link);
    a_el.textContent = item.title;

    li_el.append(a_el);
    careerItemsElement.append(li_el);
  });
};
req.send(null);

// async function getVacancy() {
//   let response = await fetch("/data/vacancy.json");
//   let data = await response.json();

//   return data;
// }

// getVacancy().then(function (result) {
//   console.log(result);
// });
