import { createContext, useMemo, useState, useEffect } from 'react';

const UserContext = createContext();
export const UsersProvider = ({ children }) => {
  const [usersAndLoading, setUsersAndLoading] = useState({
    isLoading: true,
    users: [],
  });

  const fetchUsers = async () => {
    let userData;
    if (usersAndLoading.users.length === 0) {
      console.log('fetching users');
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
    console.log(' users are there ');
  };

  return (
    <UserContext.Provider value={{ usersAndLoading, fetchUsers }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
