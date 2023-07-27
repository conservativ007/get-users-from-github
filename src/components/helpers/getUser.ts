import axios from 'axios';

export const getUser = async (login: string) => {
  const url = `https://api.github.com/search/users?q=${login}`;
  const response = await axios.get(url);

  return response.data.items[0];
};
