let greeting = "Hello World";
console.log(greeting);

// laver variabler //
const ol = document.querySelector("#ol");
const snaps = document.querySelector("#snaps");
const booster = document.querySelector("#booster");
const cola = document.querySelector("#cola");

// sætter eventlisteners på //

ol.addEventListener("click", alkoelik);
snaps.addEventListener("click", alkoelik);
booster.addEventListener("click", alkoelik);
cola.addEventListener("click", alkoelik);

// funktionen //

function alkoelik() {
  console.log(this);
  if (this == ol || this == snaps) {
    console.log("Indeholder alkohol");
  } else {
    console.log("Alkoholfri");
  }
}
