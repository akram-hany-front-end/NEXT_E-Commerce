import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

const Rating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FontAwesomeIcon key={i} icon={fullStar} />);
    } 
    else if (rating >= i - 0.5) {
      stars.push(<FontAwesomeIcon key={i} icon={faStarHalfStroke} />);
    } 
    else {
      stars.push(<FontAwesomeIcon key={i} icon={emptyStar} />);
    }
  }

  return (
    <div className="rating-stars">
      {stars}
    </div>
  );
};

export default Rating;
