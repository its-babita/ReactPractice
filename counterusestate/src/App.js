import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="counter-title">Counter App</h1>
      <h2 className="counter-heading">Increase/Decrease the count</h2>
      <h3 className="count">{count}</h3>
      <div className="btn-container">
        <button
          style={{
            color: "#ffffff",
            cursor: "pointer",
            fontSize: "15px",
            padding: "10px",
            borderRadius: "15px",
            backgroundColor: "#800080",
          }}
          onClick={() => {setCount(count+1)}}
        >
          INCREASE
        </button>
        <button
          style={{
            color: "#ffffff",
            cursor: "pointer",
            fontSize: "15px",
            padding: "10px",
            borderRadius: "15px",
            backgroundColor: "#800080",
            marginLeft: "20px",
          }}
          onClick={()=>{setCount(count-1)}}
        >
          DECREASE
        </button>
      </div>
    </>
  );
}

export default App;
