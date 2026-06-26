import { useState } from "react";
import Display from "./components/Display";
import ButtonValue from "./components/ButtonValue";

function App() {
  const [input, setInput] = useState("");


function handleClick(value) {
  if (value === "C") {
    setInput("");
  } 
  else if (value === "⌫") {
   setInput((prevInput) => prevInput.slice(0, -1));
}
  else if (value === "=") {
  try {
    setInput(eval(input).toString());
  }
   catch {
    setInput("Error");
   }
  } 

  else {
    setInput((prevInput) => prevInput + value);
  }
}


return (
  <div className="min-h-screen bg-slate-900 flex items-center justify-center">
  <div className="bg-slate-800 w-[380px] rounded-3xl p-6 shadow-2xl">
      <h1 className="text-3xl font-bold text-white text-center mb-6">
        Calculator
      </h1>

      <Display value={input} />

      <ButtonValue handleClick={handleClick} />
    </div>
  </div>
);
}

export default App;