import axios from 'axios';

const HOST = 'http://localhost:4000/users';

export async function registerNewUser({ body, userId }) {
  try {
    const res = await axios.post(HOST + '/users', { body, userId });

    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllUsers() {
  try {
    const users = await axios.get(HOST);
    return users.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUser(userId) {
  try {
    const res = await axios.delete(HOST + `/users/${userId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
