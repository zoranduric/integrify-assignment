import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import UserContext from '../context/UsersContext';

const User = () => {
  let { id } = useParams();
  const { usersAndLoading } = useContext(UserContext);
  const { users } = usersAndLoading;
  const user = users.find((user) => user.id === parseInt(id));
  const { name, username, email, phone, website } = user;

  return (
    <div>
      <div className='className_container'>
        <div className='userDetails'>
          <span> </span>
          <p>
            <span>Name: </span> {name}
          </p>
          <p>
            <span>Username: </span> {username}
          </p>
          <p>
            <span>Email: </span> {email}
          </p>
          <p>
            <span>Phone:</span> {phone}
          </p>
          <p>
            <span>Company:</span> {user.company.name}
          </p>
          <p>
            <span>Website:</span>
            <a className='userCard__Website' href={website}>
              {website}
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
};

export default User;
