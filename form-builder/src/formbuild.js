import React from "react";
import questionsArray from "./data";
let newAllQuestionKeyCombinationArray = [];

function keyCreator(keyquestion) {
  const singleQuestionKeyCombinationArray = [];
  const wordsArray = keyquestion.split(" ");
  for (let i = 0; i < wordsArray.length; i++) {
    for (let j = i + 1; j < wordsArray.length; j++) {
      const firstWord = wordsArray[i];
      const secondWord = wordsArray[j];
      const thirdWord = `${firstWord}_${secondWord}`;
      singleQuestionKeyCombinationArray.push(thirdWord.toLowerCase());
    }
  }

  newAllQuestionKeyCombinationArray.push(
    singleQuestionKeyCombinationArray[
      Math.floor(Math.random() * singleQuestionKeyCombinationArray.length)
    ]
  );
}
function StructureCreator({ num, question, keyCreator }) {
  keyCreator(question);

  const structureHTML = `
        <div class="row-container page-break">
        <div class="row-fix">
            <div class="column w-5 align-center">
                <span class="font-style"> ${num} </span>
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
            question={item.question}
            keyCreator={keyCreator}
          />
        </>
      ))}
    </div>
  );
}

export default Formbuild;
