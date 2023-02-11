import React from "react";
import questionsArray from "./data";
import JsListCreator from "./JSListCreator";
import KeyListCreator from "./KeyListCreator";
import keyCreator, { newAllQuestionKeyCombinationArray } from "./keyCreator";
import StructureCreator from "./structureCreator";

function Formbuild() {
  return (
    <div>
      <div>LIST OF KEYS</div>

      {questionsArray.map((item) => (
        <>
          <div className="border-grey mb-8 p-10">
            <StructureCreator
              key={item.num}
              num={item.num}
              serialNo={item.serialNo}
              question={item.question}
              keyCreator={keyCreator}
            />
          </div>
        </>
      ))}
      <div>LIST OF KEYS FOR JAVASCRIPT FILE</div>
      <div className="border-grey p-10">
        <JsListCreator array={newAllQuestionKeyCombinationArray} />
      </div>
      <div>LIST OF KEYS FOR OUTPUT REPORT</div>
      <div className="border-grey p-10">
        <KeyListCreator array={newAllQuestionKeyCombinationArray} />
      </div>
    </div>
  );
}

export default Formbuild;
