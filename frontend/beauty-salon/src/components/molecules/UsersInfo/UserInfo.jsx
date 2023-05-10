import React, { useEffect, useState } from 'react';
import User from '../User/User';
import { StyledH2, StyledSection, StyledTable, StyledTr } from '../User/User.styled';
import { getAllUsers, deleteUser } from '../../../api-calls/users/users';
import UserRegistration from '../UserRegistration/UserRegistration';
import { useAuth } from '../../organism/Auth/Auth';
import { useNavigate } from 'react-router-dom';

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

  return (
    <>
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
    </>
  );
}
