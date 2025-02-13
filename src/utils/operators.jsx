/* Functionality to add:
  Account for negative numbers
  Prevent adding a second decimal place, but wont work for adding two numbers both with decimals. e.g. 1.1 + 2.2
  */

const operators = ["+", "-", "*", "/", "."];


function updateCalc(value, calc, setCalc, setResult) {
  if (
    (operators.includes(value) && calc === "") ||
    (operators.includes(value) && operators.includes(calc.slice(-1)))
  )
    return;

  setCalc(calc + value);

  if (!operators.includes(value)) setResult(eval(calc + value).toString()); //eval() takes string and calculates the resulting value
}

function deleteLast(calc, setCalc, setResult) {
  if (calc === "") return;

  const newCalc = calc.slice(0, -1);
  setCalc(newCalc);

  if (operators.includes(newCalc.slice(-1))) {
    setResult(eval(newCalc.toString().slice(0, -1)));
  } else {
    setResult(eval(newCalc.toString()));
  }
}

function deleteAll(calc, setCalc, setResult) {
  if (calc === "") return;
  setCalc("");
  setResult("");
}

function equals(calc, setCalc) {
  setCalc(eval(calc).toString());
}

export { updateCalc, deleteLast, deleteAll, equals };
