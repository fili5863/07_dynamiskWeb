const endpoint = "https://persongalleri-5d3e.restdb.io/rest/persongalleri";

const mereinfo = {
  headers: {
    "x-apikey": "600fe9211346a1524ff12e31",
  },
};

async function hentData() {
  const resspons = await fetch(endpoint, mereinfo);
  const json = await resspons.json();
  vis(json);
}

const main = document.querySelector("main");
const template = document.querySelector("template").content;

function vis(json) {
  json.forEach(person => {
    const klon = template.cloneNode(true);
    klon.querySelector(".billedurl").src = "faces/" + person.billede;
    klon.querySelector(".navn").textContent = person.fornavn;
    klon.querySelector(".email").textContent = person.email;
    klon.querySelector(".titel").textContent = person.titel;
    klon.querySelector(".fødselsdag").textContent = person.fødselsdag;
    main.appendChild(klon);
  });
}

hentData();
