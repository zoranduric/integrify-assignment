import React from "react";
import DisplayDetalisButton from "./DisplayDetalisButton";

const DisplayUsers = ({ userData }) => {
  return (
    <div className="userCard">
      <div className="userCard_Detalis">
        <p className="userCard__Name">{userData.name}</p>
        <p className="userCard__Username">@{userData.username}</p>
        <p className="userCard__Website"> {userData.website} </p>
      </div>

      <DisplayDetalisButton userCard={userData}></DisplayDetalisButton>
    </div>
  );
};

export default DisplayUsers;
