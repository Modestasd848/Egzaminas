import React, { useState } from 'react';
import './App.css';
import NavBar from './components/atoms/NavBar/NavBar';
import UsersInfo from './components/atoms/UsersInfo/UserInfo';
import Users from './components/atoms/UsersList/UsersList';
import UsersList from './components/atoms/UsersList/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <UsersInfo />
    </div>
  );
}

export default App;
