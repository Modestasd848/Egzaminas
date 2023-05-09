import React from 'react';
import { deleteUser } from '../../../api-calls/users/users';

export default function Users(body, id, setUsers) {
  function deleteButtonHandler() {
    deleteUser(id).then((res) => {
      setUsers((prev) => {
        return prev.filter((users) => users._id !== id);
      });
    });
  }

  return (
    <div>
      <p>{body}</p>
      <div>
        <button onClick={deleteButtonHandler}>Delete</button>
      </div>
    </div>
  );
}
