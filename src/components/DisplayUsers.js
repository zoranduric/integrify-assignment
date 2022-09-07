import DisplayDetailsButton from './DisplayDetailsButton';
import { useContext } from 'react';
import UsersContext from '../context/UsersContext';

const DisplayUsers = () => {
  const { usersAndLoading } = useContext(UsersContext);
  const { users } = usersAndLoading;

  return (
    <div className='container'>
      {users.map((user) => (
        <div className='userCard' key={user.id}>
          <div className='userCard_Detalis'>
            <div key={user.id}>
              <p className='userCard__Name'>{user.name}</p>
              <p className='userCard__Username'>@{user.username}</p>
              <p className='userCard__Website'> {user.website} </p>
            </div>
          </div>
          <DisplayDetailsButton id={user.id} />
        </div>
      ))}
    </div>
  );
};

export default DisplayUsers;
