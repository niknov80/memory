import React from "react";
import {TIMEOUT} from "../settings";
import Card from "./card";

const Grid = ({images = [], finishedItems, checkItems, theme}) => {
  const [visibleItems, setVisibleItems] = React.useState([]);
  const className = `cards-theme-${theme}`;
  const handleCardClick = (id) => {
    if (finishedItems.includes(id) || visibleItems.includes(id)) {
      return;
    }

    switch (visibleItems.length) {
      case 0:
        setVisibleItems([id]);
        break;
      case 1:
        setVisibleItems((items) => [...items, id]);
        checkItems(visibleItems[0], id);
        setTimeout(() => {
          setVisibleItems([]);
        }, TIMEOUT);
        break;
      default:
        setVisibleItems([]);
    }
  };

  return (
    <ul className={`cards ${className}`}>
      {images.map((item) => (
        <Card
          key={item.id}
          item={item}
          isVisible={visibleItems.includes(item.id)}
          isFinished={finishedItems.includes(item.id)}
          onCardClick={handleCardClick}
        />
      ))}
    </ul>
  );
}
export default Grid;
