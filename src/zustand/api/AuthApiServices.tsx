import axios from 'axios';

// Axios Instance for API Calls
const api = axios.create({
  baseURL: 'http://192.168.0.163:8004/api/v1/user/patient/', // Your base URL
  timeout: 10000, // Request timeout (10 seconds)
  headers: {
    'Content-Type': 'application/json',
  },
});

// API: Get User by ID
export const sentOtp = async (mobileNo: string) => {
  try {
    const response = await api.post(`sendMobileOtp?mobileNo=${mobileNo}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user');
  }
};

// API: Create User
export const createUser = async (userData: object) => {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating user');
  }
};

// API: Update User
export const updateUser = async (id: number, userData: object) => {
  try {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
  } catch (error) {
    throw new Error('Error updating user');
  }
};

// API: Delete User
export const deleteUser = async (id: number) => {
  try {
    await api.delete(`/users/${id}`);
    return { message: 'User deleted successfully' };
  } catch (error) {
    throw new Error('Error deleting user');
  }
};

export default api;
