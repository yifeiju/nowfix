export const selectServices = (state = {}) => state.service;

export const selectAllServices = (state = {}) => {
  const service = selectServices(state);
  return service?.allServices;
};
