import React, {useState} from 'react';
import Star from "./Star";
import styles from "./StarRating.css"

const createArray = length => [...Array(length)]

const StarRating = ( {totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0)
  return (
    <div className="starRating" style={styles}>
      {createArray(totalStars).map((n, i) =>
        <Star
          onSelect={() => setSelectedStars(i+1)}
          selected={selectedStars > i}
          key={i}
        />)}
      <p>{selectedStars} of {totalStars} stars</p>
    </div>
  )
};

export default StarRating;
