import React from 'react'
import "./App.css"
import {useSelector,useDispatch} from "react-redux"
import {incCount,decCount} from "./actions"

const App = () => {
  const myState = useSelector((state)=>state.changeTheCount)
  const dispatch = useDispatch();
  return (
    <>
      <h1>Welcome to redux</h1>

      <h1 className="counter-title">Counter App</h1>
      <h2 className="counter-heading">Increase/Decrease the count</h2>
      <h3 className="count">{myState}</h3>
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
          onClick={()=>dispatch(incCount())}

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
          onClick={()=>dispatch(decCount())}

        >
          DECREASE
        </button>
      </div>
    </>
  )
}

export default App