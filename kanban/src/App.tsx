import React, { FC, useState } from "react";
import BoardComponent, { Board } from "./component/BoardComponent";
import "./App.css";

const App: FC = () => {
  const [input, setInput] = useState<Board>(require("./testData.json"));
  return (
    <div>
      <h3>Board Name: {input.BoardName}</h3>
      <BoardComponent board={input} setBoard={setInput}></BoardComponent>
    </div>
  );
};

export default App;
