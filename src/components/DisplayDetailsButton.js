import React from "react";

import { useNavigate, Link } from "react-router-dom";

const DisplayDetailsButton = ({ userCard }) => {
  let navigate = useNavigate();

  const handleClick = (event) => {
    let id = event.target.value;
    navigate(`/user/${id}`);
  };

  return (
    <div className="buttonContainer">
      <button type="button" value={userCard.id} onClick={handleClick}>
        More Detalis
      </button>
    </div>
  );
};

export default DisplayDetailsButton;
