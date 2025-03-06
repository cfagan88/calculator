import "./index.css";
import { useReducer } from "react";

function reducer(state, { type, payload }) {
  switch (type) {
    case "add-digit":
      if (state.overwrite) {
        return { ...state, currentOp: payload.digit, overwrite: false };
      }
      if (payload.digit === "0" && state.currentOp === "0") return state;
      if (
        payload.digit === "." &&
        (state.currentOp === "" || state.currentOp == null)
      ) {
        return { ...state, currentOp: "0." };
      }
      if (payload.digit === "." && state.currentOp.includes(".")) return state;
      return {
        ...state,
        currentOp: `${state.currentOp || ""}${payload.digit}`,
      };
    case "choose-operation":
      if (state.currentOp == null && state.prevOp == null) return state;
      if (state.currentOp == null) {
        return { ...state, operation: payload.operation };
      }
      if (state.prevOp == null) {
        return {
          ...state,
          operation: payload.operation,
          prevOp: state.currentOp,
          currentOp: null,
        };
      }
      return {
        ...state,
        prevOp: evaluate(state),
        operation: payload.operation,
        currentOp: null,
      };

    case "clear":
      return {};

    case "delete-digit":
      if (state.overwrite) {
        return { ...state, overwrite: false, currentOp: null };
      }

      if (state.currentOp == null) return state;

      if (state.currentOp.length === 1) {
        return { ...state, currentOp: null };
      }

      return { ...state, currentOp: state.currentOp.slice(0, -1) };

    case "equals":
      if (
        state.operation == null ||
        state.currentOp == null ||
        state.prevOp == null
      ) {
        return state;
      }

      return {
        ...state,
        overwrite: true,
        prevOp: null,
        operation: null,
        currentOp: evaluate(state),
      };
  }
}

function evaluate({ currentOp, prevOp, operation }) {
  const prev = parseFloat(prevOp);
  const curr = parseFloat(currentOp);
  if (isNaN(prev) || isNaN(curr)) return "";
  let computation = "";

  switch (operation) {
    case "+":
      computation = prev + curr;
      break;
    case "-":
      computation = prev - curr;
      break;
    case "x":
      computation = prev * curr;
      break;
    case "/":
      computation = prev / curr;
      break;
  }
  return computation.toString();
}

function App() {
  const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const [{ currentOp, prevOp, operation }, dispatch] = useReducer(reducer, {});

  return (
    <main className="bg-gradient-to-br from-cyan-700 to-slate-800 flex items-center justify-center h-screen">
      <div className="rounded-2xl w-[25vw] min-w-[350px]">
        <div className="bg-[#151515] rounded-t-2xl text-right h-30 flex flex-col justify-between">
          <div className="text-gray-500 text-2xl pr-5 pt-3">
            {prevOp} {operation}
          </div>
          <div className="text-gray-200 pr-5 pb-6 text-5xl">
            {currentOp || 0}
          </div>
        </div>

        <div className="grid grid-cols-6">
          <button
            onClick={() => {
              dispatch({
                type: "choose-operation",
                payload: { operation: "/" },
              });
            }}
            className="bg-[#692100] h-18 text-gray-200 text-2xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#772e0c]"
          >
            /
          </button>
          <button
            onClick={() => {
              dispatch({
                type: "choose-operation",
                payload: { operation: "x" },
              });
            }}
            className="bg-[#692100] h-18 text-gray-200 text-2xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#772e0c]"
          >
            x
          </button>
          <button
            onClick={() => {
              dispatch({
                type: "choose-operation",
                payload: { operation: "-" },
              });
            }}
            className="bg-[#692100] h-18 text-gray-200 text-2xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#772e0c]"
          >
            -
          </button>
          <button
            onClick={() => {
              dispatch({
                type: "choose-operation",
                payload: { operation: "+" },
              });
            }}
            className="bg-[#692100] h-18 text-gray-200 text-2xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#772e0c]"
          >
            +
          </button>
          <button
            onClick={() => {
              dispatch({ type: "delete-digit" });
            }}
            className="bg-[#692100] h-18 text-gray-200 text-2xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#772e0c]"
          >
            DEL
          </button>
          <button
            onClick={() => dispatch({ type: "clear" })}
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
                dispatch({ type: "add-digit", payload: { digit } });
              }}
              className="bg-[#151515] h-18 text-gray-200 text-2xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#252525]"
            >
              {digit}
            </button>
          ))}
          <button
            onClick={() => {
              dispatch({ type: "add-digit", payload: { digit: "." } });
            }}
            className="bg-[#151515] h-18 rounded-bl-2xl text-gray-200 text-2xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#252525]"
          >
            .
          </button>
          <button
            onClick={() => {
              dispatch({ type: "add-digit", payload: { digit: "0" } });
            }}
            className="bg-[#151515] h-18 text-gray-200 text-2xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#252525]"
          >
            0
          </button>
          <button
            onClick={() => {
              dispatch({ type: "equals" });
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
