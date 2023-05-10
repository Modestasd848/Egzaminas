import axios from 'axios';

const HOST = 'http://localhost:4000';

export async function login(user) {
  try {
    const res = await axios.post(HOST + '/admin', user);
    return res;
  } catch (error) {
    console.log(error);
  }
}
