import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  let { id } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [user, updateUser] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        updateUser(response.data);
        setLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <p>loading please wait</p>;
  } else {
    return (
      <div>
        <div className="className_container">
          <div className="userDetails">
            <span> </span>
            <p>
              <span>Name: </span> {user.name}
            </p>
            <p>
              <span>Username: </span> {user.username}
            </p>
            <p>
              <span>Email: </span> {user.email}
            </p>
            <p>
              <span>Phone:</span> {user.phone}
            </p>
            <p>
              <span>Company:</span> {user.company.name}
            </p>
            <p>
              <span>Website:</span>
              <a className="userCard__Website" href={user.website}>
                {user.website}
              </a>
            </p>

            <p>
              <span>Street:</span> {user.address.street}
            </p>

            <p>
              <span>Street:</span> {user.address.suite}
            </p>
            <p>
              <span>Street:</span> {user.address.city}
            </p>
            <p>
              <span>Street:</span> {user.address.zipcode}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default User;
