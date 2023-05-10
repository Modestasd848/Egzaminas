import axios from 'axios';

const HOST = 'http://localhost:4000';

export async function registerNewUser(user) {
  try {
    const res = await axios.post(HOST + '/users', user);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllUsers() {
  try {
    const users = await axios.get(HOST + '/users');
    return users.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUser(user_id) {
  try {
    const res = await axios.delete(HOST + `/users/${user_id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
