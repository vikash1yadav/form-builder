export let newAllQuestionKeyCombinationArray = [];

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
      newAllQuestionKeyCombinationArray.push(anotherRandomKey);
    }
  }

  export default keyCreator