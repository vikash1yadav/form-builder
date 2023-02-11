import React from "react";
import questionsArray from "./data";
let newAllQuestionKeyCombinationArray = [];

function JsListCreator({ array }) {
  console.log(array, "jdn");
  return (
    <>
      {array.map((item) => (
        <>{`"${item}": "" , "${item}_remarks":"",`}</>
      ))}
    </>
  );
}

function specialCharactersRemover() {}
function keyCreator(keyquestion) {
  const singleQuestionKeyCombinationArray = [];
  const wordsArray = keyquestion.split(" ");
  for (let i = 0; i < wordsArray.length; i++) {
    const element1 = wordsArray[i];
    const element2 = wordsArray[i + 1];
    const element3 = wordsArray[i + 2];

    const key = `${element1}_${element2}_${element3}`;

    singleQuestionKeyCombinationArray.push(key.toLowerCase());
    if (wordsArray.indexOf(element3) === wordsArray.length - 1) break;
  }

  var randomKeyOfSingleQuestion =
    singleQuestionKeyCombinationArray[
      Math.floor(Math.random() * singleQuestionKeyCombinationArray.length)
    ];
  for (let i = 0; i < randomKeyOfSingleQuestion.length; i++) {
    const singleCharacterOfKey = randomKeyOfSingleQuestion[i];
    if (
      singleCharacterOfKey === "?" ||
      singleCharacterOfKey === ":" ||
      singleCharacterOfKey === "," ||
      singleCharacterOfKey === "(" ||
      singleCharacterOfKey === ")" ||
      singleCharacterOfKey === "." ||
      singleCharacterOfKey === "/" ||
      singleCharacterOfKey === "’" ||
      singleCharacterOfKey === "-"
    ) {
      console.log(singleCharacterOfKey, "single hai");
      randomKeyOfSingleQuestion = randomKeyOfSingleQuestion.replace(
        singleCharacterOfKey,
        ""
      );
    }
  }

  if (!newAllQuestionKeyCombinationArray.includes(randomKeyOfSingleQuestion)) {
    newAllQuestionKeyCombinationArray.push(randomKeyOfSingleQuestion);
  } else {
    var anotherRandomKey =
      singleQuestionKeyCombinationArray[
        Math.floor(Math.random() * singleQuestionKeyCombinationArray.length)
      ];
    for (let i = 0; i < anotherRandomKey.length; i++) {
      const singleCharacterOfKey = anotherRandomKey[i];
      if (
        singleCharacterOfKey === "?" ||
        singleCharacterOfKey === ":" ||
        singleCharacterOfKey === "," ||
        singleCharacterOfKey === "(" ||
        singleCharacterOfKey === ")" ||
        singleCharacterOfKey === "/" ||
        singleCharacterOfKey === "’" ||
        singleCharacterOfKey === "-" ||
        singleCharacterOfKey === "."
      ) {
        anotherRandomKey = anotherRandomKey.replace(singleCharacterOfKey, "");
      }
    }
    console.log("pandey");
    newAllQuestionKeyCombinationArray.push(anotherRandomKey);
  }
  specialCharactersRemover(newAllQuestionKeyCombinationArray);
}
console.log(newAllQuestionKeyCombinationArray,"xsnxnsjnxjs")

function StructureCreator({ num, question, keyCreator, serialNo }) {
  keyCreator(question);

  const structureHTML = `
  <div class="section">
            <div class="rows">
              <div class="col-1 text-center">
                <p class="num-label">${serialNo}</p>
              </div>
              <div class="col-11">
                <label class="ors-form-label">${question}</label>
                <div class="rows">
                  <div class="col-3 main-radio" data-fieldtype="radio-group" data-bind="foreach:{
                      data:[
                        {id:'yes',label:'Yes'},
                        {id:'no',label:'No'}
                      ],
                      as:'option'
                    }">
                    <div class="radio-common"
                      data-bind="css:{'selected':vm.formData.${
                        newAllQuestionKeyCombinationArray[num - 1]
                      }()===option.id}">
                      <input type="radio" name="${
                        newAllQuestionKeyCombinationArray[num - 1]
                      }" data-bind="
                          checkedValue: option.id,
                          checked: vm.formData.${
                            newAllQuestionKeyCombinationArray[num - 1]
                          }, 
                          attr:{
                            id:'${
                              newAllQuestionKeyCombinationArray[num - 1]
                            }'+'-'+option.id,disabled:vm.isReadOnlyField('${
    newAllQuestionKeyCombinationArray[num - 1]
  }')
                          }" />
                      <label
                        data-bind="text:option.label, attr:{for:'${
                          newAllQuestionKeyCombinationArray[num - 1]
                        }'+'-'+option.id}"></label>
                    </div>
                  </div>
                  <div class="col-9 ors-form-control textarea-input" data-fieldtype="textarea">
                    <textarea class="textarea-text" name="${
                      newAllQuestionKeyCombinationArray[num - 1]
                    }_remarks"
                      placeholder="Remarks by Auditor" style="height: 30px;"
                      data-bind="expandable:{min:1},value:vm.formData.${
                        newAllQuestionKeyCombinationArray[num - 1]
                      }_remarks,attr:{readonly:vm.isReadOnlyField('${
    newAllQuestionKeyCombinationArray[num - 1]
  }_remarks')}"></textarea>
                  </div>
                </div>
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
      <div className="border-grey p-10">
        <JsListCreator array={newAllQuestionKeyCombinationArray} />
      </div>
    </div>
  );
}

export default Formbuild;
