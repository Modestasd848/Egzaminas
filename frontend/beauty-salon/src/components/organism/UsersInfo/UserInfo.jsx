import React, { useEffect, useState } from 'react';
import User from '../../molecules/User/User';
import { StyledSection, StyledTable, StyledTr } from '../../molecules/User/User.styled';
import {
  getAllUsers,
  deleteUser,
  updateUser,
  registerNewUser,
} from '../../../api-calls/users/users';
import UserRegistration from '../../molecules/UserRegistration/UserRegistration';
import { useAuth } from '../../../Auth/Auth';
import { useNavigate } from 'react-router-dom';
import { StyledBody, StyledLogoutButton } from './UserInfo.styled';

export default function UsersInfo() {
  const [users, setUsers] = useState([]);
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const fetchedUsers = await getAllUsers();
      setUsers(fetchedUsers);
    } catch (error) {
      console.log(error);
    }
  }

  function deleteButtonHandler(id) {
    try {
      deleteUser(id).then(() => {
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function createUser(user) {
    try {
      const { newUser } = await registerNewUser(user);
      setUsers([...users, newUser]);
    } catch (error) {
      console.log(error);
    }
  }

  function updateUserHandler(updatedUser) {
    try {
      updateUser(updatedUser._id, updatedUser).then(() => {
        setUsers((prevUsers) =>
          prevUsers.map((user) => (user._id === updatedUser._id ? updatedUser : user))
        );
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <StyledBody>
      <UserRegistration onAddUser={(newUser) => createUser(newUser)} />
      <StyledSection>
        <StyledTable>
          <thead>
            <StyledTr>
              <th>First and Last Name</th>
              <th>Email</th>
              <th>Registration Date and Time</th>
              <th></th>
            </StyledTr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User
                key={user._id}
                user={user}
                deleteButtonHandler={() => deleteButtonHandler(user._id)}
                updateUser={updateUserHandler}
                users={users}
                setUsers={setUsers}
              />
            ))}
          </tbody>
        </StyledTable>
        <StyledLogoutButton
          onClick={() => {
            auth.signOut(() => {
              navigate('/login');
            });
          }}
        >
          Log Out
        </StyledLogoutButton>
      </StyledSection>
    </StyledBody>
  );
}
