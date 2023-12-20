import userAPIToUser from '../data-adapters/userDataAdapter';

const getUser = async (userId) => {
  const response = await fetch(`http://localhost:3000/user/${userId}`);
  const data = await response.json();
  return userAPIToUser(data);
};

// const getWeekly = async (userId) => {
//   const response = await fetch(`http://localhost:3000/weekly/${userId}`);
//   const data = await response.json();
//   return data;
// };

export default getUser;
