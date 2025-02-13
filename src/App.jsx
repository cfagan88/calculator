import "./index.css";

function App() {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <main className="bg-gradient-to-br from-cyan-700 to-slate-800 flex items-center justify-center h-screen">
      <div className="rounded-xl w-[30vw]">
        <div className="bg-[#151515] text-white pr-3 py-2 text-right text-5xl">
          <span className="text-gray-500 text-xl">(0)</span> 0
        </div>

        <div className="grid grid-cols-5">
          <button className="bg-[#692100] h-18 text-white text-xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#772e0c]">
            /
          </button>
          <button className="bg-[#692100] h-18 text-white text-xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#772e0c]">
            x
          </button>
          <button className="bg-[#692100] h-18 text-white text-xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#772e0c]">
            -
          </button>
          <button className="bg-[#692100] h-18 text-white text-xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#772e0c]">
            +
          </button>
          <button className="bg-[#692100] h-18 text-white text-xl border-1 border-border-solid border-black cursor-pointer hover:bg-[#772e0c]">
            DEL
          </button>
        </div>

        <div className="grid grid-cols-3">
          {digits.map((digit) => (
            <button className="bg-[#151515] h-18 text-white text-xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#252525]">
              {digit}
            </button>
          ))}
          <button className="bg-[#151515] h-18 text-white text-xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#252525]">
            .
          </button>
          <button className="bg-[#151515] h-18 text-white text-xl font-bold border-1 border-border-solid border-black cursor-pointer hover:bg-[#252525]">
            =
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
