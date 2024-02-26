import React from "react";
import Progress from "./progress";
import Grid from "./grid";
import Modal from "./modal";
import {useGame} from "./use-game";

const GamePage = ({images = [], onShowResults, theme}) => {
  const {
    finishedItems,
    stepsCount,
    checkItems,
    isWin
  } = useGame(images);

  const handleResultsClick = () => {
    onShowResults(stepsCount);
  };

  return (
    <section className="game container">
      <Progress value={finishedItems.length / 2} max={images.length / 2} />
      <div className="steps">Шаг {stepsCount}</div>
      <Grid
        images={images}
        finishedItems={finishedItems}
        checkItems={checkItems}
        theme={theme}
      />
      {isWin && (
        <Modal>
          <h3 className="modal-caption">Победа!</h3>
          <p className="modal-description">Теперь давайте узнаем результаты этой партии</p>
          <button className="button modal-button" type="button" onClick={handleResultsClick}>Показать результаты</button>
        </Modal>
      )}
    </section>
  );
}
export default GamePage;
