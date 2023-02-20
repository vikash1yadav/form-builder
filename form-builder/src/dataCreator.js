import React from "react";
import { useState, useRef } from "react";
import "./dataCreator.css";

function DataCreator() {
  const [questionList, setQuestionList] = useState([]);
  const [serialNo, setSerialNo] = useState("");
  const [question, setQuestion] = useState("");
  const [num, setNum] = useState(1);
  const [extraField, setExtraField] = useState("");

  function deleteQuestionFunction(id) {
    questionList.pop();
    const newArray = questionList.map((item) => item);
    setNum((prev) => prev - 1);
    setQuestionList(() => newArray);
  }
  return (
    <div className="border-grey p-30 mb-20">
      <input
        className="border-one p-3 mr-10 mb-8 br-10"
        style={{ width: "300px" }}
        placeholder="Enter serial no."
        value={serialNo}
        onChange={(e) => setSerialNo(e.target.value)}
      />
      <br />
      <input
        className="w-100 border-one p-3 mr-10 mb-8 br-10"
        style={{ width: "800px" }}
        placeholder="Enter question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <br />
      <input
        className="w-100 border-one p-3 mr-10 mb-8 br-10"
        style={{ width: "300px" }}
        placeholder="Enter if any extra fields or ignore this field"
        value={extraField}
        onChange={(e) => setExtraField(e.target.value)}
      />
      <br />
      <button
        className="p-10 border-none mr-10"
        style={{ cursor: "pointer" }}
        onClick={() => {
          setNum((prev) => prev + 1);
          setQuestionList([
            ...questionList,
            {
              serialNo: `"${serialNo}"`,
              question: `"${question}"`,
              num: `"${num}"`,
              extraField: `"${extraField}"`,
            },
          ]);
          setSerialNo("");
          setQuestion("");
          setExtraField("");
        }}
      >
        Add question
      </button>
      <button
        className="p-10 border-none"
        onClick={() => deleteQuestionFunction(num)}
        style={{cursor:"pointer"}}

      >
        Delete question
      </button>
      <br />
      <div className="mt-15">DATA STRUCTURE IN OBJECT FORMAT</div>
      <div className="border-grey p-30 mb-20">
        {questionList.map((item) => {
          return (
            <>
              {` {
            serialNo : ${item.serialNo} , 
            question :${item.question},
            num :${item.num},
            extraField: ${item.extraField}
        },`}
              <br />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default DataCreator;
