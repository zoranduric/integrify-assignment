import { useEffect, useContext } from 'react';
import DisplayUsers from './components/DisplayUsers';

import UsersContext from './context/UsersContext';

function App() {
  const { usersAndLoading, fetchUsers } = useContext(UsersContext);

  useEffect(() => {
    fetchUsers();
  });

  if (usersAndLoading.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div className='App'>
        {!usersAndLoading.isLoading && <DisplayUsers />}
      </div>
    </div>
  );
}

export default App;
