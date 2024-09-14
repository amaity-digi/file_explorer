import { useState } from "react";
import "./App.css";
import { explorer } from "./components/data";
import Child from "./components/child";

function App() {
  const [count, setCount] = useState(0);
  console.log("11111111", explorer);
  return (
    <div style={{ margin: "15px", fontSize: "25px" }}>
      {explorer?.map(({ id, name, isFolder, children }) => (
        <>
          <div><span> {isFolder ? "📁": "🗃"}</span>{name}</div>
          <Child children={children}/>
        </>
      ))}
    </div>
  );
}

export default App;
