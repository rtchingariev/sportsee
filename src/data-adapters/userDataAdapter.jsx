const userAPIToUser = (user) => {
  if (user.id) {
    return {
      userId: user.id,
      userName: user.name,
    };
  } else {
    return {
      userId: user.userId,
      userName: user.fullName,
    };
  }
};

export default userAPIToUser;
