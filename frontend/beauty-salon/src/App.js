import React, { useState } from 'react';
import './App.css';
import UserRegistration from './components/molecules/UserRegistration/UserRegistration';
import UsersInfo from './components/molecules/UsersInfo/UserInfo';
import UsersList from './components/molecules/UsersList/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <UserRegistration />
      <UsersInfo />
      <UsersList />
    </div>
  );
}

export default App;
