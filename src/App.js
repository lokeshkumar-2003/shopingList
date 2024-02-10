import "./index.css";
import { useEffect, useState } from "react";
function App() {
  const [advice, setAdvice] = useState("");

  async function giveAdvice() {
    const data = await fetch("https://api.adviceslip.com/advice");
    const res = await data.json();
    setAdvice(res.slip.advice);
  }
  return (
    <div className="container-body">
      <div className="content-body">
        <h2 className="content">
          {advice === "" ? "Click Below Get Motivates" : advice}
        </h2>

        <button className="btn" onClick={() => giveAdvice()}>
          {"Free Advice"}
        </button>
      </div>
    </div>
  );
}

export default App;
