export const formatQuery = (field, option, value) => {
  return { field, option, value };
};

export const getUsersFilteredByServicePrice = (maxPrice) => {
  return formatQuery("servicesPrice", "<=", maxPrice);
};

export const getUsersFilteredByStars = (minStars) => {
  return formatQuery("stars", ">=", minStars);
};

export const getUsersFilteredForServiceScreen = ({
  maxPrice,
  minStars,
} = {}) => {
  return [
    getUsersFilteredByServicePrice(maxPrice),
    //getUsersFilteredByStars(minStars),
  ];
};
