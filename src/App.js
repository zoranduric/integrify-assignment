import { useState, useEffect } from 'react';
import './App.css';
import DisplayUsers from './components/DisplayUsers';
function App() {
  const [users, updateUser] = useState([]);
  //load users on page load
  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
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
      <div className='App'>
        {users.map((user, index) => (
          <DisplayUsers userData={user} key={user.id}></DisplayUsers>
        ))}
      </div>
    </div>
  );
}

export default App;
