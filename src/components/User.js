import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  let { id } = useParams();
  console.log(id);

  return (
    <div>
      <div>
        <p>Single page for user {id}</p>
      </div>
    </div>
  );
};

export default User;
