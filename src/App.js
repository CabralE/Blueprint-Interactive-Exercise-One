import { useState, useEffect } from "react";
// import "./App.css";
import Question3 from "./component/question3";

const firstTaskDataset = [44, 154, 32, 41, 7, 22, 17, 21, 9, 20];
const secondTaskDataset = [22, 14, 3, 5, 667, 19, 2, 41, 9, 70];
const bonusString =
  "Use the shortest possible regular expression or replacement method using php, ruby or javascript to put a smiley face after every word that ends in a vowel in this sentence";
const randomizeNumberSet = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array.map((ele) => <span>{ele}, </span>);
};

function findMeanForNumberSet(array) {
  const total = array.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return <>Mean: {total / array.length}</>;
}

function endsInVowels(string) {
  const newWords = [];
  const words = string.split(",").join(" ").split(" ");
  const vowels = "aeiou";
  for (let i = 0; i < words.length; i++) {
    const lastChar = words[i][words[i].length - 1];
    if (vowels.includes(lastChar)) {
      newWords.push(words[i], "&#x1F61C;");
    } else if (words === "php") {
      newWords.push(words[i], ",");
    } else {
      newWords.push(words[i]);
    }
  }
  newWords.join(" ");
  return (
    <>
      {newWords.map((word) =>
        word[0] === "&" ? <span>&#x1F600;</span> : <span> {word}</span>
      )}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Edward Cabral's Blueprint Interactive Assessment: Exercise One</h1>
      <h2>
        1. Randomize the order of the following number set: "44, 154, 32, 41, 7,
        22, 17, 21, 9, 20"
      </h2>
      <h3>{randomizeNumberSet(firstTaskDataset)}</h3>
      <h2>
        2. Find the mean of the following number set: "22, 14, 3, 5, 667, 19, 2,
        41, 9, 70"
      </h2>
      <h3>{findMeanForNumberSet(secondTaskDataset)}</h3>
      <h2>
        3. Fetch and parse the json data at
        https://blueprintinteractive.com/test.json to produce the following
        table:
      </h2>
      <Question3 />
      <h2>
        Bonus. Use the shortest possible regular expression or replacement
        method using php, ruby or javascript to put a smiley face after every
        word that ends in a vowel in this sentence.
      </h2>
      <h3>{endsInVowels(bonusString)}</h3>
    </div>
  );
}

export default App;
