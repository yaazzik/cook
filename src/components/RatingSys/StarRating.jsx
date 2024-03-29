import React from 'react';
import Star from "./Star";

const createArray = length => [...Array(length)]

const StarRating = ( {totalStars = 5, selectedStars = 0 , onRate = f => f}) => {

  return (
    <div>
      {createArray(totalStars).map((n, i) =>
        <Star
          selected={selectedStars > i}
          key={i}
          onSelect={() => onRate(i + 1)}
        />)}
      <p>{selectedStars} of {totalStars} stars</p>
    </div>
  )
};

export default StarRating;
