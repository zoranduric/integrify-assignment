import React from "react";
import { useNavigate } from "react-router-dom";
//import { usePrams } from "react-router-dom";

const DisplayDetalisButton = ({ userCard }) => {
  let navigate = useNavigate();
  //const {} = usePrams();
  const handleClick = (event) => {
    //  event.preventDefault();
    console.log(event.target.value);
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

export default DisplayDetalisButton;
