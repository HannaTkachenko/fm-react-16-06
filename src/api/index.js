export const getUsers = (pageNum) => {
  return fetch(
    `https://randomuser.me/api/?results=5000&page=${pageNum}&seed=users&nat=gb`
  ).then((response) => response.json());
};

