import Formbuild from "./formbuild";
import DataCreator from "./dataCreator";
import { useState } from "react";
import Footer from "./footer";
import "./dataCreator.css"

function App() {
  const [showHTML , setShowHTML] = useState(false)
  return (
    <div className="App">
      <div className="align-center color">
       <h2>
       FORM STRUCTURE BUILDER
      </h2> 
        </div>
      <DataCreator/>
      <button className="p-10 border-none " onClick={() => setShowHTML(value => !value)}>{showHTML ? "Hide" : "Show"} HTML Structure</button>
      {showHTML && <Formbuild /> } 
      <Footer /> 
    </div>
  );
}

export default App;
