export const fetchTicketsAndUsers = async () => {
    const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
    const data = await response.json();
    // console.log(data)
    return data;
  };
  