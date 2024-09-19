import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
    return response.data;
  } catch (error) {
    console.error('Error fetching data from API', error);
    return { tickets: [], users: [] };
  }
};
