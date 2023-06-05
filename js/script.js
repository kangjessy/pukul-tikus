const dompet = document.querySelectorAll(".dompet");
const tikus = document.querySelectorAll(".tikus");
const papanSkor = document.querySelector(".papan-skor");

let dompetBefore;
let finish;
let skor;

function randomDompet(dompet) {
  const d = Math.floor(Math.random() * dompet.length);
  const dRandom = dompet[d];

  if (dRandom == dompetBefore) {
    randomDompet(dompet);
  }
  dompetBefore = dRandom;
  return dRandom;
}

function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculkanTikus() {
  const dRandom = randomDompet(dompet);
  const wRandom = randomWaktu(300, 1000);
  dRandom.classList.add("muncul");

  setTimeout(() => {
    dRandom.classList.remove("muncul");
    if (!finish) {
      munculkanTikus();
    }
  }, wRandom);
}

function mulai() {
  finish = false;
  skor = 0;
  papanSkor.textContent = 0;

  munculkanTikus();
  setTimeout(() => {
    finish = true;
  }, 10000);
}

function pukul() {
  skor++;
  this.parentNode.classList.remove("muncul");
  papanSkor.textContent = skor;
}

tikus.forEach((d) => {
  d.addEventListener("click", pukul);
});
