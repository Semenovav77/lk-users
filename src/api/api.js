import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3004',
});

export const API = {
  login(email, password) {
    return instance.get(`/auth?email=${email}&password=${password}`);
  },

  getUser() {
    return instance.get(`/users`);
  },
};
