import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

export const fetchUserPosts = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/posts?userId=${userId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
};
