import React from 'react';

import { useNavigate } from 'react-router-dom';

const DisplayDetailsButton = ({ id }) => {
  let navigate = useNavigate();

  const handleClick = (event) => {
    let id = event.target.value;
    navigate(`/user/${id}`);
    console.log(id);
  };

  return (
    <div className='buttonContainer'>
      <button type='button' value={id} onClick={handleClick}>
        More Detalis
      </button>
    </div>
  );
};

export default DisplayDetailsButton;
