import "./components.css";
import { useMemo, useRef, useState } from "react";
import Settings from "./Settings";
import Dictionary from "./Dictionary";
// import Dictionary from "./Dictionary";
// import englishWords from "../english_words.json";
import englishWords from "../500-english-words.json";
import germanWords from "../500-english-words.json";

function Game(props) {
  const [point, setPoint] = useState(0);
  const [tries, setTries] = useState(0);
  const [openedGame, setOpenedGame] = useState(false);
  const [partOfGame, setPartOfGame] = useState(0);
  const [newGame, setNewGame] = useState(0);
  const [dictionarySsettings, setDictionarySettings] = useState({
    firstPartState: "first_visible",
    secondPartState: "second_visible",
    thirdPartState: "third_visible",
  });
  const [numbersAmount, setNumbersAmount] = useState(12);
  const [dataName, setDataName] = useState("englishWords");
  console.log("dont change", dataName);
  const sentences = useMemo(() => console.log("change", dataName), [dataName]);
  console.log(englishWords[400]);
  const wordsForCards = useMemo(() => {
    const wordsForLeft = [];
    const wordsForRight = [];

    for (let i = 0; i < numbersAmount; i++) {
      const randomNumber = Math.floor(Math.random() * 500);
      wordsForLeft.push(englishWords[randomNumber]);
      wordsForRight.push(englishWords[randomNumber]);
    }
    wordsForRight.sort(() => 0.5 - Math.random());
    console.log(wordsForLeft, wordsForRight);
    return {
      wordsForLeft: wordsForLeft,
      wordsForRight: wordsForRight,
    };
  }, [newGame]);
  console.log(wordsForCards);
  return (
    <div className="App">
      <header className="App-header">
        <div className="result">
          <div className="point">
            {point}
            <div className="qula">ქულა</div>
          </div>
          /
          <div className="tries">
            {tries}
            <div className="cda">ცდა</div>
          </div>
        </div>
        <button
          className={partOfGame === 0 ? "opened_game" : ""}
          onClick={() => {
            setPartOfGame(0);
          }}
        >
          S
        </button>
      </header>
      <div>
        {/* <Dictionary
          newGame={newGame}
          point={point}
          setPoint={setPoint}
          tries={tries}
          setTries={setTries}
          firstPartState={dictionarySsettings.firstPartState}
          secondPartState={dictionarySsettings.secondPartState}
          thirdPartState={dictionarySsettings.thirdPartState}
          cardsData={wordsForCards}
          setPartOfGame={setPartOfGame}
          //   isVisibleFront={isVisibleFront}
          //   isVisibleBack={isVisibleBack}
          sentences={sentences}
        /> */}
        {partOfGame === 0 ? (
          <Settings
            newGame={newGame}
            setNewGame={setNewGame}
            dictionarySsettings={dictionarySsettings}
            setDictionarySettings={setDictionarySettings}
            setPoint={setPoint}
            setTries={setTries}
            setPartOfGame={setPartOfGame}
            numbersAmount={numbersAmount}
            setNumbersAmount={setNumbersAmount}
            dataName={dataName}
            setDataName={setDataName}
          />
        ) : partOfGame === 1 ? (
          <Dictionary
            newGame={newGame}
            point={point}
            setPoint={setPoint}
            tries={tries}
            setTries={setTries}
            firstPartState={dictionarySsettings.firstPartState}
            secondPartState={dictionarySsettings.secondPartState}
            thirdPartState={dictionarySsettings.thirdPartState}
            cardsData={wordsForCards}
            setPartOfGame={setPartOfGame}
            sentences={sentences}
            //   isVisibleFront={isVisibleFront}
            //   isVisibleBack={isVisibleBack}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Game;
