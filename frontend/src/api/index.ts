import axios from 'axios';

export default function getUsers() {
  return axios.get('http://127.0.0.1:8080/users');
}
