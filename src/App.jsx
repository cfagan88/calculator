import "./index.css";

function App() {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <main className="flex items-center justify-center min-h-100">
      <div className="bg-[#252525] rounded-md max-w-400px w-[40vw] overflow-hidden">
        <div className="rounded-md h-10 text-white">
          <span className="text-gray-500">(0)</span> 0
        </div>

        <div className="">
          <button className="bg-[#383838] h-12 w-12 m-0.5 rounded-md cursor-pointer">
            ➗
          </button>
          <button className="bg-[#383838] h-12 w-12 m-0.5 rounded-md cursor-pointer">
            ✖️
          </button>
          <button className="bg-[#383838] h-12 w-12 m-0.5 rounded-md cursor-pointer">
            ➖
          </button>
          <button className="bg-[#383838] h-12 w-12 m-0.5 rounded-md cursor-pointer">
            ➕
          </button>
          <button className="bg-[#383838] h-12 w-12 m-0.5 rounded-md cursor-pointer text-white">
            DEL
          </button>
        </div>

        <div className="digits"></div>
        {digits.map((digit) => (
          <button className="bg-[#383838] h-12 w-12 m-0.5 rounded-md cursor-pointer text-white">
            {digit}
          </button>
        ))}
        <button className="bg-[#383838] h-12 w-12 m-0.5 rounded-md cursor-pointer text-white">
          .
        </button>
        <button className="bg-[#383838] h-12 w-12 m-0.5 rounded-md cursor-pointer text-white">
          =
        </button>
      </div>
    </main>
  );
}

export default App;
