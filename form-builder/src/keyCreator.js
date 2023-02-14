export let newAllQuestionKeyCombinationArray = [];
const nonKeyWords = [
  "as",
  "and",
  "does",
  "all",
  "up",
  "that",
  "been",
  "this",
  "the",
  "of",
  "from",
  "be",
  "is",
  "any",
  "to",
];
function keyCreator(keyquestion) {
  let singleQuestionKeyCombinationArray = [];
  const wordsArray = keyquestion.split(" ");
  for (let i = 0; i < wordsArray.length; i++) {
    const element1 = wordsArray[i];
    const element2 = wordsArray[i + 1];
    const element3 = wordsArray[i + 2];
    const key = `${element1}_${element2}_${element3}`;
    singleQuestionKeyCombinationArray.push(key.toLowerCase());
    if (wordsArray.indexOf(element3) === wordsArray.length - 1) break;
  }
  for (let index = 0; index < nonKeyWords.length; index++) {
    const element = nonKeyWords[index];
    singleQuestionKeyCombinationArray =
      singleQuestionKeyCombinationArray.filter(
        (word) => !word.includes(element)
      );
  }

  var randomKeyOfSingleQuestion =
    singleQuestionKeyCombinationArray.length === 0
      ? "enter_your_key"
      : singleQuestionKeyCombinationArray[
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
    newAllQuestionKeyCombinationArray.push(
      singleQuestionKeyCombinationArray.length === 0
        ? "Enter_your_key"
        : `${randomKeyOfSingleQuestion}_1`
    );
  }
}

export default keyCreator;
