import React from "react";
import {AppRoute} from "../settings";
import InitialPage from "./initial-page";
import GamePage from "./game-page";
import ResultsPage from "./results-page";

const App = ({getPictures, results=[]}) => {
  const [page, setPage] = React.useState(AppRoute.Initial);
  const [result, setResult] = React.useState(0);
  const [pictures, setPictures] = React.useState([]);
  const [theme, setTheme] = React.useState('');

  const showResults = (stepsCount) => {
    setResult(stepsCount);
    setPage(AppRoute.Results);
  };
  const handleReset = () => {
    setPage(AppRoute.Initial);
  };
  const handleStart = (type) => {
    const pictures = getPictures(type);
    setTheme(type);
    setPictures(pictures);
    setPage(AppRoute.Game);
  };
  const getPage = (route) => {
    switch (route) {
      case AppRoute.Initial:
        return <InitialPage onStart={handleStart}/>;
      case AppRoute.Game:
        return <GamePage images={pictures} onShowResults={showResults} theme={theme}/>;
      case AppRoute.Results:
        return (
          <ResultsPage
            stepsCount={result}
            onResetGame={handleReset}
            results={results}
          />
        );
      default:
        return null;
    }
  };
  return getPage(page);
}
export default App;
