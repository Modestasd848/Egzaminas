import React, { useEffect } from 'react';
import { getAllUsers } from '../../../api-calls/users/users';

export default function Users({ body, users, setUsers }) {
  useEffect(() => {
    const userId = localStorage.getItem('loggedInUser');
    getAllUsers({ userId }).then((res) => setUsers(res));
  }, []);

  return (
    <div>
      <div>{body}</div>
      {users.map((user) => {
        return <div key={user._id} id={user._id} body={user.body} setUsers={setUsers} />;
      })}
    </div>
  );
}
