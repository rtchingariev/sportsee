function getUser(userId) {
  return fetch(`http://localhost:3000/user/${userId}`).then((response) =>
    response.json()
  );
}
export default getUser;
