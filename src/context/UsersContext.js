import { createContext, useState } from 'react';

const UserContext = createContext();
export const UsersProvider = ({ children }) => {
  const [usersAndLoading, setUsersAndLoading] = useState({
    isLoading: true,
    users: [],
  });

  const fetchUsers = async () => {
    let userData;
    if (usersAndLoading.users.length === 0) {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        userData = await response.json();

        setUsersAndLoading({ isLoading: false, users: userData });
      } catch (error) {
        console.log(error);
        userData = [];
      }
      //update users state
    }
  };

  return (
    <UserContext.Provider value={{ usersAndLoading, fetchUsers }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
