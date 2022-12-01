import React, {useState} from 'react';
import Star from "./Star";
import styles from "./StarRating.css"

const createArray = length => [...Array(length)]

const StarRating = ( {totalStars = 5, selectedStars = 0 } ) => {
  return (
    <div>
      {createArray(totalStars).map((n, i) =>
        <Star
          selected={selectedStars > i}
          key={i}
        />)}
      <p>{selectedStars} of {totalStars} stars</p>
    </div>
  )
};

export default StarRating;
