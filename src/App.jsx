import "./index.css";
import { useState } from "react";

/* Functionality to add:
  Account for negative numbers
  Prevent adding a second decimal place, but wont work for adding two numbers both with decimals. e.g. 1.1 + 2.2
  */

function App() {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operators = ["+", "-", "*", "/", "."];
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  function updateCalc(value) {

  }

  function equals() {
    
  }

  function deleteLast() {

    
  }

  function deleteAll() {

  }

  return (
    <main className="bg-gradient-to-br from-cyan-700 to-slate-800 flex items-center justify-center h-screen">
      <div className="rounded-2xl w-[30vw] min-w-[280px]">
        <div className="bg-[#151515] rounded-t-2xl text-gray-200 pr-5 py-4 text-right text-5xl">
          {result ? (
            <span className="text-gray-500 text-xl">({result})</span>
          ) : (
            ""
          )}{" "}
          {calc || 0}
        </div>

        <div className="grid grid-cols-6">
          <button
            onClick={() => {
              updateCalc("/");
            }}
            className="bg-[#692100] h-18 text-gray-200 text-2xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#772e0c]"
          >
            /
          </button>
          <button
            onClick={() => {
              updateCalc("*");
            }}
            className="bg-[#692100] h-18 text-gray-200 text-2xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#772e0c]"
          >
            x
          </button>
          <button
            onClick={() => {
              updateCalc("-");
            }}
            className="bg-[#692100] h-18 text-gray-200 text-2xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#772e0c]"
          >
            -
          </button>
          <button
            onClick={() => {
              updateCalc("+");
            }}
            className="bg-[#692100] h-18 text-gray-200 text-2xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#772e0c]"
          >
            +
          </button>
          <button
            onClick={() => {
              deleteLast();
            }}
            className="bg-[#692100] h-18 text-gray-200 text-2xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#772e0c]"
          >
            DEL
          </button>
          <button
            onClick={() => {
              deleteAll();
            }}
            className="bg-[#692100] h-18 text-gray-200 text-2xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#772e0c]"
          >
            CE
          </button>
        </div>

        <div className="grid grid-cols-3">
          {digits.map((digit) => (
            <button
              key={`${digit}`}
              onClick={() => {
                updateCalc(digit);
              }}
              className="bg-[#151515] h-18 text-gray-200 text-2xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#252525]"
            >
              {digit.toString()}
            </button>
          ))}
          <button
            onClick={() => {
              updateCalc("0");
            }}
            className="bg-[#151515] h-18 rounded-bl-2xl text-gray-200 text-2xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#252525]"
          >
            0
          </button>
          <button
            onClick={() => {
              updateCalc(".");
            }}
            className="bg-[#151515] h-18 text-gray-200 text-2xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#252525]"
          >
            .
          </button>
          <button
            onClick={() => {
              equals();
            }}
            className="bg-[#151515] h-18 rounded-br-2xl text-gray-200 text-xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#252525]"
          >
            =
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
