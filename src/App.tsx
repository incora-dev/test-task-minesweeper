import logo from "./logo.svg";
import "./App.css";

import { setComplexity, sendCommand } from "board/boardReducer";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "configureStore";

function App() {
  const complexityLevels = [1, 2, 3, 4];

  const { complexity } = useSelector((state: RootState) => state.board);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (complexity) {
      dispatch(sendCommand(`new ${complexity}`));
      dispatch(sendCommand("map"));
    }
  }, [complexity]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          {complexityLevels.map((btn) => (
            <button
              key={btn}
              onClick={() => {
                dispatch(setComplexity(btn));
              }}
            >
              {btn}
            </button>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
