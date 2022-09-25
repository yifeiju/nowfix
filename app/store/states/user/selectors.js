export const selectUser = (state = {}) => state.user;

export const selectCurrentUser = (state = {}) => {
  const user = selectUser(state);
  return user?.currentUser;
};

export const selectAllUserTypes = (state = {}) => {
  const user = selectUser(state);
  return user?.allUserTypes;
};