import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

const User = () => {
  let { id } = useParams();

  const [user, updateUser] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      updateUser(userData);
    })();
  }, []);

  return (
    <div>
      <div>
        <p>Single page for user {id}</p>
        <p>{user.id}</p>
        {user.name}
      </div>
    </div>
  );
};

export default User;
