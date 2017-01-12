export const selectLibrary = (id) => {
  const action = {};
  action.type = 'select_library';
  action.payload = id;
  return action;
};
