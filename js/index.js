let sumEl = document.getElementById("sum-el");
function getNumber() {
  let Num1 = parseFloat(document.getElementById("num1-el").value);
  let Num2 = parseFloat(document.getElementById("num2-el").value);
  return { Num1, Num2 };
}
function add() {
  let { Num1, Num2 } = getNumber();
  let sub = Num1 + Num2;
  sumEl.textContent = "Result : " + sub;
}

function subtraction() {
  let { Num1, Num2 } = getNumber();
  let minus = Num1 - Num2;
  sumEl.textContent = "Result : " + minus;
}

function multiplication() {
  let { Num1, Num2 } = getNumber();
  let Thesaurus = Num1 * Num2;
  sumEl.textContent = "Result : " + Thesaurus;
}
function division() {
  let { Num1, Num2 } = getNumber();
  let division = Num1 / Num2;
  sumEl.textContent = "Result : " + division;
}
