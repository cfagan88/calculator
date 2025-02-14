import "./index.css";
import { useReducer } from "react";

/* Functionality to add:
  Account for negative numbers
  Prevent adding a second decimal place, but wont work for adding two numbers both with decimals. e.g. 1.1 + 2.2
  */

// https://www.youtube.com/watch?v=DgRrrOt0Vr8&t=550s

const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EQUALS: "equals",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return { ...state, currentOp: `${currentOp || ""}${payload.digit}` };
    case ACTIONS.CHOOSE_OPERATION:
      return {};
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.DELETE_DIGIT:
      return {};
    case ACTIONS.EQUALS:
      return {};
  }
}

function App() {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [{ currentOp, prevOp, operation }, dispatch] = useReducer(reducer, {});

  return (
    <main className="bg-gradient-to-br from-cyan-700 to-slate-800 flex items-center justify-center h-screen">
      <div className="rounded-2xl w-[30vw] min-w-[280px]">
        <div className="bg-[#151515] rounded-t-2xl text-gray-200 pr-5 py-4 text-right text-5xl">
          <div>
            {prevOp} {operation}
          </div>
          <div>{currentOp}</div>
        </div>

        <div className="grid grid-cols-6">
          <button
            onClick={() => {}}
            className="bg-[#692100] h-18 text-gray-200 text-2xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#772e0c]"
          >
            /
          </button>
          <button
            onClick={() => {}}
            className="bg-[#692100] h-18 text-gray-200 text-2xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#772e0c]"
          >
            x
          </button>
          <button
            onClick={() => {}}
            className="bg-[#692100] h-18 text-gray-200 text-2xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#772e0c]"
          >
            -
          </button>
          <button
            onClick={() => {}}
            className="bg-[#692100] h-18 text-gray-200 text-2xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#772e0c]"
          >
            +
          </button>
          <button
            onClick={() => {}}
            className="bg-[#692100] h-18 text-gray-200 text-2xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#772e0c]"
          >
            DEL
          </button>
          <button
            onClick={() => {}}
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
                dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
              }}
              className="bg-[#151515] h-18 text-gray-200 text-2xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#252525]"
            >
              {digit}
            </button>
          ))}
          <button
            onClick={() => {}}
            className="bg-[#151515] h-18 rounded-bl-2xl text-gray-200 text-2xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#252525]"
          >
            0
          </button>
          <button
            onClick={() => {}}
            className="bg-[#151515] h-18 text-gray-200 text-2xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#252525]"
          >
            .
          </button>
          <button
            onClick={() => {}}
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
