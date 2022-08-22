let forsog = 1;

const tal = document.querySelector(".tal");

let randTal = Math.floor(Math.random() * 11);
console.log(randTal);

const gaet = Number(tal.value);
if (gaet === randTal) {
  console.log("du vandt");
}
