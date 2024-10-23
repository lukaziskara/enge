import { useEffect, useState } from "react";
import "./Settings.css";
const lexicons = [
  { fileName: "englishWords", lexicon_name: "ქართულ-ინგლისური" },
  { fileName: "germanWords", lexicon_name: "გერმანული-ინგლისური" },
];
const gameDifficulties = [
  {
    isFirstVisible: "first_visible",
    isSecondVisible: "second_visible",
    isThirdVisible: "right_visible",
  },
  {
    isFirstVisible: "first_visible",
    isSecondVisible: "second_waiting",
    isThirdVisible: "third_visible",
  },
  {
    isFirstVisible: "first_visible",
    isSecondVisible: "second_visible",
    isThirdVisible: "third_waiting",
  },
  {
    isFirstVisible: "first_waiting",
    isSecondVisible: "second_waiting",
    isThirdVisible: "third_visible",
  },
  {
    isFirstVisible: "first_visible",
    isSecondVisible: "second_invisible",
    isThirdVisible: "third_visible",
  },
  {
    isFirstVisible: "first_waiting",
    isSecondVisible: "second_invisible",
    isThirdVisible: "third_visible",
  },
  {
    isFirstVisible: "first_visible",
    isSecondVisible: "second_invisible",
    isThirdVisible: "third_waiting",
  },
];

export default function Settings(props) {
  const {
    newGame,
    setNewGame,
    setPoint,
    setTries,
    setPartOfGame,
    // dictionarySettings,
    setDictionarySettings,
    numbersAmount,
    setNumbersAmount,
    dataName,
    setDataName,
  } = props;
  const [chosenDifficulty, setChosenDifficulty] = useState(5);
  const [firstPartState, setFirstPartState] = useState(
    gameDifficulties[4].isFirstVisible
  );
  const [secondPartState, setSecondPartState] = useState(
    gameDifficulties[4].isSecondVisible
  );
  const [thirdPartState, setThirdPartState] = useState(
    gameDifficulties[4].isThirdVisible
  );
  const [sentencesFirstState, setSentencesFirstState] =
    useState(firstPartState);
  const [sentencesSecondState, setSentencesSecondState] =
    useState(secondPartState);
  const [sentencesThirdState, setSentencesThirdState] =
    useState(thirdPartState);

  // console.log("rerender");
  // useEffect(() => {}, [setChosenDifficulty]);

  return (
    <>
      <div className="select_dictionary">
        <h3>აირჩიე ლექსიკონი</h3>
        <div className="lexicons">
          {lexicons.map((item) => (
            <div
              className={
                dataName == item.fileName ? "lexicon-div chosen" : "lexicon-div"
              }
              onClick={() => {
                setDataName(item.fileName);
                console.log("dadsdw");
              }}
            >
              {item.lexicon_name}
            </div>
          ))}
        </div>
      </div>
      <div className="select_difficulty">
        <h3 className="diff_header">აირჩიე სირთულე</h3>
        <div className="flex_center difficulties">
          {gameDifficulties.map((gameDifficulty, index) => (
            // console.log(gameDifficulty);

            <div
              className={
                chosenDifficulty === index + 1 ? "dItem cItem" : "dItem"
              }
              onClick={() => {
                // console.log(gameDifficulty, index);
                // setNewGame();
                setChosenDifficulty(index + 1);
                setFirstPartState(gameDifficulty.isFirstVisible);
                setSecondPartState(gameDifficulty.isSecondVisible);
                setThirdPartState(gameDifficulty.isThirdVisible);
                setSentencesFirstState(gameDifficulty.isFirstVisible);
                setSentencesSecondState(gameDifficulty.isSecondVisible);
                setSentencesThirdState(gameDifficulty.isThirdVisible);
              }}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
      <div className="examples">
        <div className="">
          <div className="card left_card">
            <div className={firstPartState}>სიტყვა</div>
            <div className={secondPartState}>word</div>
          </div>
        </div>
        <div className="">
          <div className="card right_card">
            <div className={thirdPartState}>word</div>
          </div>
        </div>
      </div>
      <div className="green_screen flex_center">
        <div className="input_amount">
          სიტყვების რაოდენობა
          <input
            id="words_amount"
            name="myInput"
            maxLength={2}
            type="number"
            value={numbersAmount}
            onChange={(e) => setNumbersAmount(e.target.value.slice(0, 2))}
          />
        </div>
        <button
          onClick={() => {
            setPoint(0);
            setTries(0);
            setPartOfGame(1);
            setNewGame(newGame + 1);
            setDictionarySettings({
              firstPartState: firstPartState,
              secondPartState: secondPartState,
              thirdPartState: thirdPartState,
            });
          }}
        >
          დაწყება
        </button>
      </div>
    </>
  );
}
