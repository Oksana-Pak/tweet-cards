import axios from 'axios';
import { errorMessage } from './notifications';
axios.defaults.baseURL = 'https://64651a5b228bd07b35426720.mockapi.io';

export const fetchUsers = async page => {
  try {
    const response = await axios.get(`/users?page=${page}&limit=3`);
    return response.data;
  } catch (error) {
    errorMessage('Something wrong. Try again.');
    throw new Error('Something wrong. Try again.');
  }
};

export const updateUser = async user => {
  try {
    await axios.put(`/users/${user.id}`, user);
  } catch (error) {
    errorMessage('Something wrong. Try again.');
    throw new Error('Something wrong. Try again.');
  }
};

export const fetchFilteredUsers = async status => {
  try {
    const response = await axios.get(`/users?status=${status}`);
    return response.data;
  } catch (error) {
    errorMessage('Something wrong. Try again.');
    throw new Error('Something wrong. Try again.');
  }
};
