const btnPlus = document.getElementById("plus");
const btnMinus = document.getElementById("minus");
const btnReset = document.getElementById("reset");

let num = document.getElementById("number");
num.value = 0;

btnPlus.addEventListener("click", () => {
  num.value++;
});

btnMinus.addEventListener("click", () => {
  if (num.value > 0) {
    num.value--;
  }
});

btnReset.addEventListener("click", () => {
  num.value = 0;
});
