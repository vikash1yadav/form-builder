import React from "react";
import questionsArray from "./data";
let newAllQuestionKeyCombinationArray = [];

function keyCreator(keyquestion) {
  const singleQuestionKeyCombinationArray = [];
  const wordsArray = keyquestion.split(" ");
  for(let i = 0; i< wordsArray.length; i++){
    const element1 = wordsArray[i]
    const element2 = wordsArray[i+1]
    const element3 = wordsArray[i+2]
    
    const key = `${element1}_${element2}_${element3}`
    singleQuestionKeyCombinationArray.push(key.toLowerCase())
    if(wordsArray.indexOf(element3) === wordsArray.length-1) break;
  }
  const randomKeyOfSingleQuestion = singleQuestionKeyCombinationArray[
    Math.floor(Math.random() * singleQuestionKeyCombinationArray.length)
  ]
  if(!newAllQuestionKeyCombinationArray.includes(randomKeyOfSingleQuestion)){
    newAllQuestionKeyCombinationArray.push(
      randomKeyOfSingleQuestion
      );
  } else {
    const anotherRandomKey =  singleQuestionKeyCombinationArray[
      Math.floor(Math.random() * singleQuestionKeyCombinationArray.length)
    ]
    newAllQuestionKeyCombinationArray.push(
      anotherRandomKey
    )
  }
}

function StructureCreator({ num, question, keyCreator , serialNo }) {
  keyCreator(question);

  const structureHTML = `
        <div class="row-container page-break">
        <div class="row-fix">
            <div class="column w-5 align-center">
                <span class="font-style"> ${serialNo} </span>
            </div>
            <div class="column w-45 align-left">
                <p>
                    ${question}
                </p>
            </div>
            <div class="column w-2-5 align-center">
                <span class="value_text">
                    ::${newAllQuestionKeyCombinationArray[num - 1] + "_yes"}
                </span>
            </div>
            <div class="column w-2-5 align-center">
                <span class="value_text">
                    ::${newAllQuestionKeyCombinationArray[num - 1] + "_no"}
                </span>
            </div>
            <div class="column w-7 align-center">
                <span class="font-style">
                    A 1.4.6
                </span>
            </div>
            <div class="column w-38 align-left">
                <span class="font-style">
                    ::${newAllQuestionKeyCombinationArray[num - 1] + "_remarks"}
                </span>
            </div>
        </div>
    </div>
            `;
  return (
    <>
      {structureHTML} <br />
    </>
  );
}

function Formbuild() {
  return (
    <div>
      {questionsArray.map((item) => (
        <>
          <StructureCreator
            key={item.num}
            num={item.num}
            serialNo = {item.serialNo}
            question={item.question}
            keyCreator={keyCreator}
          />
        </>
      ))}
    </div>
  );
}

export default Formbuild;
