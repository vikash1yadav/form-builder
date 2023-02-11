import "./App.css";
import Formbuild from "./formbuild";
import DataCreator from "./dataCreator";
import { useState } from "react";
function App() {
  const [showHTML , setShowHTMl] = useState(false);
  
  return (
    <div className="App">
      <DataCreator />
      <button onClick={()=>setShowHTMl(value => !value)}>{`${showHTML === false ? "hide" : "Show"}`} html structure</button>
      {showHTML && <Formbuild /> }
    </div>
  );
}

export default App;
