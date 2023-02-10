import React from "react";
import { useState, useRef } from "react";
import "./dataCreator.css";

function DataCreator() {
  const [questionList, setQuestionList] = useState([]);
  const [serialNo, setSerialNo] = useState("");
  const [question, setQuestion] = useState("");
  const [num, setNum] = useState(1);

  return (
    <div>
      <input
        className="border-one p-3 mr-10"
        placeholder="enter serial no."
        value={serialNo}
        onChange={(e) => setSerialNo(e.target.value)}
      />
      <input
        className="w-100 border-one p-3 mr-10"
        placeholder="enter question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button
        className="p-10 border-none"
        onClick={() => {
          setNum((prev) => prev + 1);
          setQuestionList([
            ...questionList,
            {
              serialNo,
              question,
              num,
            },
          ]);
          setSerialNo("");
          setQuestion("");
        }}
      >
        Add question
      </button>{" "}
      <br />
      {questionList.map((item) => {
        return (
          <>
            {` {
            serialNo : ${item.serialNo} , 
            question :${item.question},
            num :${item.num}
        },`}{" "}
            <br />
          </>
        );
      })}
    </div>
  );
}

export default DataCreator;
