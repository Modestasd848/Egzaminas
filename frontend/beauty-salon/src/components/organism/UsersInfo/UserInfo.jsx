import React, { useEffect, useState } from 'react';
import User from '../../molecules/User/User';
import { StyledH2, StyledSection, StyledTable, StyledTr } from '../../molecules/User/User.styled';
import { getAllUsers, deleteUser, updateUser } from '../../../api-calls/users/users';
import UserRegistration from '../../molecules/UserRegistration/UserRegistration';
import { useAuth } from '../../../Auth/Auth';
import { useNavigate } from 'react-router-dom';
import { StyledBody } from './UserInfo.styled';

export default function UsersInfo() {
  const [users, setUsers] = useState([]);
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      const fetchedUsers = await getAllUsers();
      setUsers(fetchedUsers);
    }
    fetchUsers();
  }, []);

  function deleteButtonHandler(id) {
    deleteUser(id)
      .then(() => {
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function updateUserHandler(updatedUser) {
    updateUser(updatedUser._id, updatedUser)
      .then(() => {
        setUsers((prevUsers) =>
          prevUsers.map((user) => (user._id === updatedUser._id ? updatedUser : user))
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <StyledBody>
      <UserRegistration />
      <StyledSection>
        <StyledH2>adding and adjusting customers</StyledH2>
        <StyledTable>
          <thead>
            <StyledTr>
              <th>Customer's first and last name </th>
              <th>Email</th>
              <th>registration date and time</th>
            </StyledTr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <User
                  key={index}
                  user={user}
                  deleteButtonHandler={() => deleteButtonHandler(user._id)}
                  updateUser={updateUserHandler}
                ></User>
              );
            })}
          </tbody>
        </StyledTable>
        <button
          onClick={() => {
            auth.signOut(() => {
              navigate('/login');
            });
          }}
        >
          Log Out
        </button>
      </StyledSection>
    </StyledBody>
  );
}
