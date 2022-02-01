import React from "react";
import DisplayDetailsButton from "./DisplayDetailsButton";

const DisplayUsers = ({ userData }) => {
  return (
    <div className="userCard">
      <div className="userCard_Detalis">
        <p className="userCard__Name">{userData.name}</p>
        <p className="userCard__Username">@{userData.username}</p>
        <p className="userCard__Website"> {userData.website} </p>
      </div>

      <DisplayDetailsButton userCard={userData}></DisplayDetailsButton>
    </div>
  );
};

export default DisplayUsers;
