import React from 'react';
import Ingredients from "./Ingredients";

const IngredientsList = ({list}) => {
  return (
    <ul className="ingredients">
      {list.map((ingredient, i) => (
        <Ingredients key={i} {...ingredient} />
      ))}
    </ul>
  );
};

export default IngredientsList;
